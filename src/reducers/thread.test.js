import {
  receiveThread,

} from '../actions/thread'
import thread from './thread'

/*

What BEHAVIOUR do we have to test?

Task 1, write the describe and its
Task 2, implement the expectations

*/

describe('Thread reducer', () => {
  it(`should add a message to the thread`, () => {
    expect(thread(null, receiveThread({ message: 'hello' }))).toMatchSnapshot()
  })
})
