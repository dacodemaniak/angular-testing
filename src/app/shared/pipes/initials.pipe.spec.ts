import { InitialsPipe } from './initials.pipe';

describe('InitialsPipe', () => {
  // Set a variable for pipe storage
  let pipe: InitialsPipe

  beforeEach(() => {
    pipe = new InitialsPipe()
  })

  it('Should create an instance', () => {
    pipe = new InitialsPipe();
    expect(pipe).toBeTruthy();
  })

  it('Should return a string', () => {
    expect(pipe.transform('Jean-Luc Aubert')).toBeInstanceOf(String)
  })

  it (`Should return PM if string is 'Pierre Martin`, () => {
    expect(pipe.transform('Pierre Martin')).toBe('PM')
  })

  it(`Should be JLA if name is 'Jean-Luc Aubert'`, () => {
    expect(pipe.transform('Jean-Luc Aubert')).toBe('JLA')
  })

  it (`Should return MP if string is Pierre Martin and object says lastnameFirst as true`, () => {
    expect(pipe.transform('Pierre Martin', {lastnameFirst: true})).toBe('MP')
  })

  it (`Should return JA if string is JLA and dontUseCompoundFistname is true`, () => {
    expect(pipe.transform('Jean-Luc Aubert', {dontUseCompoundFirstname: true})).toBe('JA')
  })

  it(`Should return AJ if string is Jean-Luc Aubert and lastnameFirst is true and dontUseCompoundFirst is true`, () => {
    expect(pipe.transform('Jean-Luc Aubert', {lastnameFirst: true, dontUseCompoundFirstname: true})).toBe('AJ')
  })
})
