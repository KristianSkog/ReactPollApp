var React = require('react');
var Display = require('./parts/Display');
var JoinSpeakerForm = require('./parts/JoinSpeakerForm');
var AddQuestion = require('./parts/AddQuestion');
var AudienceList = require('./parts/AudienceList');
var QuestionList = require('./parts/QuestionList');

var Speaker = React.createClass({

    render: function() {

        return (
            <Display if={this.props.status === 'connected'}>

                <Display if={this.props.member.type === 'speaker'}>
                    <QuestionList 
                        questions={this.props.questions}
                        emit={this.props.emit} />
                    <AudienceList audience={this.props.audience} />
                </Display>

                <Display if={this.props.member.type !== 'speaker'}>
                    <h2>Start the presentation</h2>
                    <JoinSpeakerForm emit={this.props.emit}/>
                </Display>
                
                <Display if={this.props.member.type === 'speaker'}>
                    <AddQuestion emit={this.props.emit} />
                </Display>  

            </Display>
        )

    }

})
module.exports = Speaker;