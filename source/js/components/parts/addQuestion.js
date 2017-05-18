var React = require('react');

var addQuestion = React.createClass({

    render() {
        return(
            <div>
                <h3>Lägg till en fråga:</h3>
                <form action="javascript:void(0)" id="q-form" onSubmit={this.addQuestion}>
                    <input type="text" ref="questionInput" placeholder="FRÅGA"  required/>
                    <input type="text" ref="answerInputOne" placeholder="Svar A" required/>
                    <input type="text" ref="answerInputTwo" placeholder="Svar B" required/>
                    <input type="text" ref="answerInputThree" placeholder="Svar C" required/>
                    <input type="text" ref="answerInputFour" placeholder="Svar D" required/>
                    <button>Lägg till fråga</button>
                </form>
            </div>
        )
    },

    addQuestion(){
        //console.log("Kör addQuestion");
        var newQuestion = this.refs.questionInput.value,
            newAnswerA = this.refs.answerInputOne.value,
            newAnswerB = this.refs.answerInputTwo.value,
            newAnswerC = this.refs.answerInputThree.value,
            newAnswerD = this.refs.answerInputFour.value;

        this.props.emit("addQuestion", {
                q: newQuestion,
                a: newAnswerA,
                b: newAnswerB,
                c: newAnswerC,
                d: newAnswerD
        });

        form = document.getElementById('q-form');
        form.reset();
        // Reload the page so the question is added to list
        location.reload();
    }
})

module.exports = addQuestion;