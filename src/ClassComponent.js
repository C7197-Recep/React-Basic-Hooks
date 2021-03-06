import React from 'react';

class ClassComponent extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //         counter:0
    //     }
    //     this.increase=this.increase.bind(this);
    // }
    // increase(){
    //     this.setState({counter:this.state.counter+1});
    // }

    /*YUKARIDAKI CONSTRUCTOR YAPISININ DAHA SADELESTIRILMIS HALI ICIN
    YANI BIND YAPMAMAK ICIN
    FONKSIYONU ARROW FUNCTION OLARAK YAZMALIYIZ*/
    
    state = {
        counter: 0
    }


    componentDidMount(){
        console.log("ComponentDidMount");
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }


    increase = () => {
        this.setState({counter: this.state.counter + 1})
    }


    render() {
        // console.log("Class Counter: ", this.state.counter)
        return (
            <div className="class">
                <h2>Class Component</h2>
                <p>Counter: {this.state.counter}</p>
                <button onClick={() => this.increase()}>Increase</button>
            </div>
        )
    }
}

export default ClassComponent;
