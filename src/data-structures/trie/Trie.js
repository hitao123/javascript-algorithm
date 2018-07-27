import TrieNode from './TrieNode';

const HEAD_CHARCTOR = '*';
export default class Trie {
  constructor() {
    this.head = new TrieNode(HEAD_CHARCTOR);
  }

  addWord(word) {
    const character = Array.from(word);
    let currentNode = this.head;
    for (let charIndex = 0; charIndex < character.length; charIndex += 1) {
      const isComplete = charIndex === character.length - 1;
      currentNode = currentNode.addChild(character[charIndex], isComplete);
    }
  }

  suggestNextCharacters(word) {
    const lastCharacter = this.getLastCharacterNode(word);

    if (!lastCharacter) {
      return null;
    }
    return lastCharacter.suggestChild();
  }

  doesWordExist(word) {
    return !!this.getLastCharacterNode(word);
  }

  getLastCharacterNode(word) {
    const character = Array.from(word);
    let currentNode = this.head;
    for (let charIndex = 0; charIndex < character.length; charIndex += 1) {
      if (!currentNode.hasChild(character[charIndex])) {
        return null;
      }
      currentNode = currentNode.getChild(character[charIndex]);
    }
    return currentNode;
  }
}
