const removeElements = (head, value) => {
    if(head === null) return head;
    if(head.value === value) {
        head = head.next;
    }

    let temp = head;
    while(temp.next && temp.next.value !== value) {
        temp = temp.next;
    }
    if(temp.next.value === value){
        let ToRemove = temp.next;
        temp.next = ToRemove.next;
    }
}