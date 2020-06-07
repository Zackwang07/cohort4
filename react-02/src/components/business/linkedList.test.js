import {ListNode, LinkedList} from './linkedList'


test('ListNode', () => {
    const node = new ListNode('aaa', 100);
    expect(node.show()).toBe('Subject: aaa, Amount: 100')
    
})

test('LinkedList', () => {
    const linkedList = new LinkedList;
    linkedList.addNode('aaa', 100);
    linkedList.addNode('bbb', 200);
    linkedList.addNode('ccc', 300);
    linkedList.addNode('ddd', 400);

    expect(linkedList.first().show()).toBe('Subject: aaa, Amount: 100');

    expect(linkedList.next().show()).toBe('Subject: bbb, Amount: 200');  

    linkedList.insert('eee', 500);
    expect(linkedList.next().show()).toBe('Subject: eee, Amount: 500');  
    
    expect(linkedList.last().show()).toBe('Subject: ddd, Amount: 400');
    
    expect(linkedList.previous().show()).toBe('Subject: ccc, Amount: 300');

    linkedList.last();
    linkedList.delete();
    expect(linkedList.last().show()).toBe('Subject: ccc, Amount: 300');

    expect(linkedList.total()).toBe(1100)
})

