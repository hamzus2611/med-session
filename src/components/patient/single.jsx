/* eslint-disable jsx-a11y/img-redundant-alt */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SingleTeam(props) {
	return (
		<div className="single-team" >
			<div className="team-img">
				<img
					src={props.img}
					alt="Team Image"
				/>
				<div className="team-info">
					<h3 className="title"><a href="#">{props.name}</a></h3>
					<p className="post">{props.designation}</p>
				</div>
			</div>

			<div className="team-desc">
				<p className="desc">{props.description}</p>
			</div>
		</div>
	)
}

export default SingleTeam