/** @jsx React.DOM */
var CommentBox = React.createClass({displayName: 'CommentBox',
    getInitialState: function() {
        return {data: []};
    },  
      componentDidMount: function() {
        $.ajax({
          url: this.props.url,
          dataType: 'json',
          success: function(data) {
            this.setState({data: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
        
      }, 

  render: function() {

    return (
      React.DOM.div({className: "commentBox"}, 
        React.DOM.h1(null, "CommentBox"), 
        CommentList({data: this.state.data}), 
        CommentForm(null)
      )
    );
  }
});

var CommentList = React.createClass({displayName: 'CommentList',
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        Comment({author: comment.author}, 
          comment.text
        )
      );
    });

    return (
      React.DOM.div({className: "commentList"}, 
        commentNodes
      )
    );
  }
});

var Comment = React.createClass({displayName: 'Comment',
  render: function() {
    return (
      React.DOM.div({className: "comment"}, 
        React.DOM.h2({className: "commentAuthor"}, 
          this.props.author
        ), 
        this.props.children
      )
    );
  }
});

var CommentForm = React.createClass({displayName: 'CommentForm',
  render: function() {
    return (
      React.DOM.div({className: "commentForm"}, 
        React.DOM.textarea(null), 
        React.DOM.button(null, "Comment")
      )
    );
  }
});

React.renderComponent(
  CommentBox({url: "/comments.json"}),
  document.getElementById('content')
);  