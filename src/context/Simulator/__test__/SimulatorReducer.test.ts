import { vi } from 'vitest'
import simulatorReducer, { type SimulatorReducer, type Config } from '../SimulatorReducer'
import type { State } from '../SimulatorContext'
import mapMatchCount from '../mapMatchCount'
import createMockState from './createMockState'

describe('SimulatorReducer', () => {
  let counterService: () => number
  let numberGeneratorService: () => number[]
  let state: State
  let config: Config
  let reducer: SimulatorReducer

  beforeEach(() => {
    counterService = vi.fn().mockReturnValue(0)
    numberGeneratorService = vi.fn().mockReturnValue([])
    state = createMockState()
    config = {
      TICKET_PRICE: 100,
      LOTTERY_NUMBER_COUNT: 5,
      LOTTERY_MIN_NUMBER: 1,
      LOTTERY_MAX_NUMBER: 10
    }
    reducer = simulatorReducer(mapMatchCount, counterService, numberGeneratorService, config)
  })

  test('should update the drawInterval value', () => {
    expect(reducer(state, { type: 'updateInterval', interval: 999 })).toEqual(
      expect.objectContaining({
        drawInterval: 999
      })
    )
  })

  test('should update the toggleRandomNmber value', () => {
    expect(reducer(state, { type: 'toggleRandomNumbers' })).toEqual(
      expect.objectContaining({
        withRandomNumbers: true
      })
    )
  })

  test('when dispatching start, should lock the user numbers and update isRunning', () => {
    const state = createMockState({
      userNumbers: [1, 2, 3]
    })
    expect(reducer(state, { type: 'start' })).toEqual(
      expect.objectContaining({
        isRunning: true,
        lockedUserNumbers: [1, 2, 3]
      })
    )
  })

  test('should restore the user numbers and update isRunning', () => {
    const state = createMockState({
      isRunning: true,
      lockedUserNumbers: [1, 2, 3]
    })

    expect(reducer(state, { type: 'stop' })).toEqual(
      expect.objectContaining({
        isRunning: false,
        userNumbers: [1, 2, 3],
        lockedUserNumbers: []
      })
    )
  })

  describe('when dispatching addNumber', () => {
    test('should add the number', () => {
      const state = createMockState()
      expect(reducer(state, { type: 'addNumber', number: 1 })).toEqual(
        expect.objectContaining({
          userNumbers: [1]
        })
      )
    })

    test('should not add the number what is already in the list', () => {
      const state = createMockState({
        userNumbers: [1, 2, 3]
      })
      expect(reducer(state, { type: 'addNumber', number: 2 })).toEqual(
        expect.objectContaining({
          userNumbers: [1, 2, 3]
        })
      )
    })

    test('should not add the more numbers when the list is full', () => {
      const state = createMockState({
        userNumbers: [1, 2, 3, 4, 5]
      })
      expect(reducer(state, { type: 'addNumber', number: 10 })).toEqual(
        expect.objectContaining({
          userNumbers: [1, 2, 3, 4, 5]
        })
      )
    })

    test('should not add the number when its out of range', () => {
      expect(reducer(state, { type: 'addNumber', number: 90 })).toEqual(
        expect.objectContaining({
          userNumbers: []
        })
      )
    })

    test('should remove the number', () => {
      const state = createMockState({
        userNumbers: [12]
      })
      expect(reducer(state, { type: 'removeNumber', number: 12 })).toEqual(
        expect.objectContaining({
          userNumbers: []
        })
      )
    })

    describe('when draw is dispatched', () => {
      beforeEach(() => {
        state = createMockState({
          isRunning: true,
          drawCount: 51
        })
        counterService = vi.fn().mockReturnValue(0)
        numberGeneratorService = vi.fn().mockReturnValue([20, 21, 22, 23, 24])
        reducer = simulatorReducer(mapMatchCount, counterService, numberGeneratorService, config)
      })

      test('should incement the draw count', () => {
        expect(reducer(state, { type: 'draw' })).toEqual(
          expect.objectContaining({
            drawCount: 52
          })
        )
      })

      test('should generate and store the draw result', () => {
        expect(reducer(state, { type: 'draw' })).toEqual(
          expect.objectContaining({
            drawResult: [20, 21, 22, 23, 24]
          })
        )
      })

      test('should calculate the total money spent amount', () => {
        expect(reducer(state, { type: 'draw' })).toEqual(
          expect.objectContaining({
            moneySpent: 5200
          })
        )
      })

      test('should calculate the years spent amount', () => {
        expect(reducer(state, { type: 'draw' })).toEqual(
          expect.objectContaining({
            yearsSpent: 1
          })
        )
      })

      describe('when withRandomNumbers is set and user has no numbers', () => {
        beforeEach(() => {
          state = createMockState({
            isRunning: true,
            withRandomNumbers: true
          })
          counterService = vi.fn().mockReturnValue(0)
          numberGeneratorService = vi.fn().mockReturnValue([20, 21, 22, 23, 24])
          reducer = simulatorReducer(mapMatchCount, counterService, numberGeneratorService, config)
        })

        test('should generate and set numbers for the user', () => {
          expect(reducer(state, { type: 'draw' })).toEqual(
            expect.objectContaining({
              userNumbers: [20, 21, 22, 23, 24]
            })
          )
        })
      })

      describe('when withRandomNumbers is set and user has a few numbers', () => {
        beforeEach(() => {
          state = createMockState({
            isRunning: true,
            withRandomNumbers: true,
            lockedUserNumbers: [1, 2]
          })
          counterService = vi.fn().mockReturnValue(0)
          numberGeneratorService = vi.fn().mockReturnValue([22, 23, 24])
          reducer = simulatorReducer(mapMatchCount, counterService, numberGeneratorService, config)
        })

        test('should generate and set numbers for the user', () => {
          expect(reducer(state, { type: 'draw' })).toEqual(
            expect.objectContaining({
              userNumbers: [1, 2, 22, 23, 24]
            })
          )
        })
      })

      describe('when there is a match', () => {
        beforeEach(() => {
          counterService = vi.fn().mockReturnValue(3)
          reducer = simulatorReducer(mapMatchCount, counterService, numberGeneratorService, config)
        })

        test('should incement the match count', () => {
          expect(reducer(state, { type: 'draw' })).toEqual(
            expect.objectContaining({
              matches: expect.objectContaining({
                threeTimes: 1
              })
            })
          )
        })
      })

      describe('when there is a full match', () => {
        beforeEach(() => {
          counterService = vi.fn().mockReturnValue(5)
          reducer = simulatorReducer(mapMatchCount, counterService, numberGeneratorService, config)
        })

        test('should incement the match count', () => {
          expect(reducer(state, { type: 'draw' })).toEqual(
            expect.objectContaining({
              matches: expect.objectContaining({
                fiveTimes: 1
              })
            })
          )
        })

        test('should stop the draw', () => {
          expect(reducer(state, { type: 'draw' })).toEqual(
            expect.objectContaining({
              isRunning: false
            })
          )
        })
      })
    })
  })
})
