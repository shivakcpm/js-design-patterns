class UserSubscription{
   constructor(){
       this.subscribers = [];
       this.users = [];
   }
   subscribe(fn){
       this.subscribers.push(fn);
   }
   unSubscribe(fn){
     this.subscribers=  this.subscribers.filter(item => fn!==item);
   }
   addUser(user){
    this.users.push(user);
    this.notify({user,state:'added'});
   }
   removeUser(user){
       const index= this.users.indexOf(user);
       if(index != -1){
        this.users.pop(user);
        this.notify({user,state:'removed'})
       }
  
   }

   notify(data){
       this.subscribers.forEach(fn=>{fn(data)})
   }
}