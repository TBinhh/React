
import bg from './images/1884223351.jpg';
import avatar from './images/ChannelN97.jpg';
export default function ProfileCard() {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card">
                        <img src={bg} className="card-img-top" alt="..."></img>
                        <img src="./Channel N97.jpg" className="img-thumbnail avatar rounded-circle" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Follow </a>
                            </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}