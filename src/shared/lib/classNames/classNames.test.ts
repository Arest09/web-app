// import { classNames } from './classNames'
import { classNames } from '@/shared/lib'

describe('test', () => {
  test('with main class', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with mod  classes', () => {
    expect(classNames('', { foo: true, bar: undefined })).toBe('foo')
  })

  test('with additional classes', () => {
    expect(classNames('', {}, ['foo', 'bar'])).toBe('foo bar')
  })

  test('with all classes', () => {
    const expected = 'foo1 bar foo class1'
    expect(classNames('foo1', { bar: true, foo: true, foobar: false }, ['class1'])).toBe(expected)
  })
})
