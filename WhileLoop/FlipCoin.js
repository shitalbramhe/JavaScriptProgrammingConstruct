function headortail(){
    while( head != 11 && tail !=11)
    {
        let random = Math.floor(Math.random() * 10) % 2;
        if(random === 0)
        head++;
        else
        tail++
    }
    }
    let head = 0;
    let tail = 0;
    headortail();

    if(head == 1)
    console.log("Head Won");
    else
    console.log("Tail Won");
