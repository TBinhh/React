class CountButton extends React.Component {
    handleClick = (e) => {
        console.log(e);
    }
    render() {
        return (
            <div className="container pt-3 text-center">
                <button className="btn btn-primary" label="Decrease (-)" onClick={this.handleClick('-')}></button>
                <span> {this.state.count}</span>
                <button className="btn btn-primary" label="Increase (+)" onClick={this.onClick('+')}></button>
            </div>
        )
    }
}