
//! Async 

import { sys } from "typescript";


function task1(){
    setTimeout(() => {
        console.log('Task 1 Completed');
    }, 2000);
}

function task2(){
    setTimeout(() => {
        console.log('Task 2 Completed');
    }, 1000);
}

// task1();
// task2();


// Promises

const fetchData = (value:boolean):Promise <string> => {
    return new Promise( (resolve, reject) => {
        if(value)
        setTimeout(() => {
            // resolve('Data Fetched Successfully...')
        }, 2000);
        // else reject('Unable to Fetch Data...')
    })
}
fetchData(true)
    .then((data:string)=>{
    console.log(`Success:`,data);
        // return 'get more data';
        fetchData(false).then((data1)=>{
            console.log('Data 1', data1);
        })
        .catch((err)=>{
            console.log(console.log(err));
        })
    })
    // .then((moredata)=>{
    //     console.log(`Data:`, moredata);
    // }) 
    .catch((err:any)=>{ 
    console.log(`Error:`,err);
    })


    const fetchDatanew = async (value:boolean): Promise<string> => {
            return 'Data fetched '
    }

        fetchDatanew(true)
                 .then((data)=>{
                    console.log('Data:',data);
                 }).catch((err)=>{
                    console.log(`Err:`,err);
                 })


    async function getData():Promise<void> {
        try{ 
            const data = await fetchDatanew(true);
            const data1  = await fetchDatanew(false);
        }catch(err) {
            // console.log(`Facing issue on getData function`, err);
        }
    }

    // working with api's using Fetch 
        interface Post {
            userId:string;
            id:number;
            titile:string;
            body:string;
        }

        async function fetchPost():Promise<Post[]> {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const posts:Post[] = await response.json();  
                console.log(posts);
                return posts; 
            }catch(err:any){ 
                console.log(err);
                throw new Error(err)
            }
        }

        // fetchPost()
                //   .then((data) => console.log('Post:', data))
                //   .catch((err)=> console.log(err))

// Concurrent Promises with Promises All 

        async function task_1() {
            console.log('Task 1');
            return 'task_1';
        }
         async function task_2() {
            console.log('Task 2');
            return 'task_2'
        }

        const ftchData = async ():Promise<[string , string]> => {

            const [data1, data2] = await Promise.all([
                task_1(),
                task_2()
            ]);

            return [data1,data2];
        } 

        ftchData()
                .then((data)=> console.log('Promises all exec-: ',data))
                .catch((err)=> console.log('Err:',err));

        
let x:unknown = 'Hello'
    console.log(x.toUpperCase());