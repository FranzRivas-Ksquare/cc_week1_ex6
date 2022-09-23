const { cypher } = require('../exercise');

test('Testing the cypher exercise', () => { 
    expect(cypher('')).toBeDefined();
    expect(cypher('JRYPBZR GB VGX!')).toBe('WELCOME TO ITK!')
    expect(cypher('jrypbzr gb vgx!')).toBe('welcome to itk!')
    expect(cypher('PBER PBHEFR 2022')).toBe('CORE COURSE 2022')
    expect(cypher('Pber Pbhefr 2022')).toBe('Core Course 2022')
    expect(cypher('1 ZRQVHZ CVMMN')).toBe('1 MEDIUM PIZZA')
    expect(cypher('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')
 })