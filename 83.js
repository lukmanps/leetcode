function deleteDuplicates(head){
    let temp = head;

    while(temp.next){
        let next = temp.next;
        if(temp.value === next.value){
            temp.next = next.next;
        } else {
            temp = temp.next;
        }
        
    }
    return head;
}