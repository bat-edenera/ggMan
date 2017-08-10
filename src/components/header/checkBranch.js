import React,{Component} from 'react';
import {connect} from 'react-redux';
class CheckBranch extends Component{
	render(){
		const {show,title,toTitle} = this.props;
		if(show){
			return (
				<div className="branch">
					<p>{title}</p>
					<span>切换至{toTitle}<i className="tbzico ico-hdown"></i></span>
				</div>
			)
		}else{
			return null
		}
	}
}
var mapState =(state)=>{
	
	var title="个人版",toTitle="团队版",show=true;
	if(state.loginInfo.teamId>0){
		title = '团队版';
		toTitle = '个人版';
	}
	if(state.loginInfo.uid===0||state.loginInfo.coopId>0){
		show = false;
	}
	return{
		title,
		toTitle,
		show
	}
}
export default connect(mapState)(CheckBranch)
