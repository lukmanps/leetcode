//Delete Node in a Linked List;

function deleteNode(node) {
    let temp = head;
    let size = head.length;

    while(temp.next !== null && temp.next !== node){
        temp = temp.next;   
    }

    temp.next = temp.next.next;
    size--;
    return head;
}