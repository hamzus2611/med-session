/* eslint-disable jsx-a11y/img-redundant-alt */
import { Container, Row, Col } from 'reactstrap';
import SectionHeading from '../heading';
import SingleTeam from './single';
import React, { Component } from 'react';
import axios from 'axios';
//import './Patient.css';
// import teamImage1 from '../../assets/images/team/1.png';
// import teamImage2 from '../../assets/images/team/2.png';
// import teamImage3 from '../../assets/images/team/3.png';

class Team extends Component {

	state = {
		patient: [],
	};

	componentDidMount() {
		axios.get('/cabinet/patient').then(res => {
			console.log(res);
			this.setState({ patient: res.data });
		});
	}

	render() {
		return (
			<div className="tcd-team pt-110 pb-110 md-pt-70 md-pb-70">

				<Container>

					<SectionHeading
						classes="sec-title center mb-40"
						title=" Specialistes"

					/>
					<Row className=" " >

						<Col className="row" >
							{this.state.patient.map(patient =>
								<li className="card text-center">

									<div className="single-team col-md-11" style={{ width: '21rem' }}>
										<div className=" team-img">
											<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqAumk0Oi_WiGSUvO79GPWk_IgkP2IVkyiw&usqp=CAU" alt="Team Image" />
											<div className="team-info">
												<h3 className="title">
													<a href="#">{patient.nom_p} {patient.prenom_p}</a>
												</h3>
												<div><h5>{patient.num_p}</h5></div>
												<p className="card-body ">{patient.description}</p>
											</div>
										</div>


										<ul className="social-info d-flex justify-content-around">

											<li><a href={patient.google_link}> <i class="fas fa-envelope-open" color=""></i></a></li>
											<li><a href={patient.facebook_link}><i class="fab fa-facebook-f"></i></a></li>
											<li><a href={patient.twitter_link}><i class="fab fa-twitter"></i></a></li>
										</ul>
									</div>
								</li>
							)}
						</Col>

					</Row>
					<Row className="team-member">
						<Col>
							<SingleTeam
								// img={teamImage1}
								name="Ibrahim Riaz"
								designation="Web Developer"
								description="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusmus. Donec quam felis..."
								googleLink="#"
								facebookLink="#"
								twitterLink="#"
							/>
						</Col>
						<Col>
							<SingleTeam
								// img={teamImage2}
								name="Paul Walker"
								designation="Manager"
								description="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusmus. Donec quam felis..."
								googleLink="#"
								facebookLink="#"
								twitterLink="#"
							/>
						</Col>
						<Col>
							<SingleTeam
								// img={teamImage3}
								name="Kory Anderson"
								designation="Designer"
								description="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusmus. Donec quam felis..."
								googleLink="#"
								facebookLink="#"
								twitterLink="#"
							/>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}
export default Team