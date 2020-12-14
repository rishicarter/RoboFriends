import {Component} from 'react';
class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError: false
        }
    }
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, errorInfo);
        this.setState({hasError:true});
    }
    render(){
        if (this.state.hasError){
            return <h1>Something Went Wrong!!!</h1>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;