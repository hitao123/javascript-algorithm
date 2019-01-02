import longgestCommonSubsequence from '../longgestCommonSubsequence';


describe('longgestCommonSubsequence', () => {
  it('should get longgest common subsequence', () => {
    expect(longgestCommonSubsequence(['a', 'b', 'd', 'f', 'i'], ['a', 'd', 'i'])).toEqual(['a', 'd', 'i']);
    expect(longgestCommonSubsequence(['a', 'b', 'd', 'f', 'i'], ['k', 'j', 'x'])).toEqual(['']);
  });
});
