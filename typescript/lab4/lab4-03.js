// class Info{
//    logging(msg){
//        console.info(msg);
//    } 
// }
// class Warn{
//     logging(msg){
//         console.warn(msg);
//     } 
//  }
// class Error{
//     logging(msg){
//         console.error(msg);
//     } 
// }
// class Table{
//     logging(msg){
//         console.table(msg);
//     } 
// }
// class Strategy{
//     setStrategy(loggingMethod){
//         this.loggingMethod=loggingMethod;
//     }
//     logging(msg){
//         this.loggingMethod.logging(msg);   
//     }
// }
// const strategy = new Strategy();

// strategy.setStrategy(new Info());
// strategy.logging('info....');

// strategy.setStrategy(new Warn());
// strategy.logging('warn....');

// strategy.setStrategy(new Error());
// strategy.logging('error....');

// strategy.setStrategy(new Table());
// strategy.logging(['table', 'table']);
//solution-2
class Info{
    logging(information){
        console.info(information);
    }
}
class Warn{
    logging(information){
        console.warn(information);
    }
}
class Error{
    logging(information){
        console.error(information);
    }
}
class Table{
    logging(information){
        console.table(information);
    }
}
class Strategy{
    loggingIn = "";
    setStrategy(log){
        this.loggingIn = log;
    }
    logging(information){
        this.loggingIn.logging(information);
    }
}

const strategy = new Strategy();
strategy.setStrategy(new Info());
strategy.logging('info....');
strategy.setStrategy(new Warn());
strategy.logging('warn....');
strategy.setStrategy(new Error());
strategy.logging('error....');
strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);