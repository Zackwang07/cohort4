import func from './LinkedListFunc';

test('test plumming', () => {
    expect(func.test1()).toBe('hi')
})

//create list
let list = new func.LinkedList();
//insert first and test
list.insert('a', 1);
expect(list.total()).toBe(1);
expect(list.first()).toBe('a');
expect(list.show()).toBe('subject: a, amount: 1');
expect(list.next().subject).toBe('a');
expect(list.last()).toBe('a');
expect(list.previous().subject).toBe('a');
list.delete();
expect(list.first()).toBe(null);
expect(list.delete()).toBe('list is empty');
expect(list.total()).toBe(0);

//insert second and test
list.insert('a', 1);
list.insert('b', 2);
expect(list.show()).toBe('subject: b, amount: 2');
expect(list.first()).toBe('a');
expect(list.next().subject).toBe('b');
expect(list.last()).toBe('b');
expect(list.previous().subject).toBe('a');

//delete
list.delete();
expect(list.show()).toBe('subject: b, amount: 2');

//insert third and test
list.insert('c', 3);
expect(list.show()).toBe('subject: c, amount: 3');
expect(list.total()).toBe(5);

//delete
list.delete();
expect(list.show()).toBe('subject: b, amount: 2');

list.insert('d', 4);
expect(list.previous().subject).toBe('b');
list.insert('e', 5);
list.insert('f', 6);
list.insert('g', 7);
expect(list.previous().subject).toBe('f');
expect(list.previous().subject).toBe('e');
expect(list.previous().subject).toBe('d');
expect(list.next().subject).toBe('e');
expect(list.next().subject).toBe('f');
expect(list.next().subject).toBe('g');