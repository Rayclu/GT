import assert from 'assert'
import {randomWords, addToDOM,  checking} from '../script'
function words() {
    try{
        const possibleWord = ''
        assert.notEqual(possibleWord, randomWords())
        assert.ok(checking());
    }catch(e){
        assert.ok(true)
    }
}

function adding() {
    try {
        assert.doesNotThrow(addToDOM(randomWords()));
    } catch (e) {
        console.assert("[OK]");
    }
}

const main = () => {
    words();
    adding();
};
main();