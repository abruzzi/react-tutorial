/** @jsx React.DOM */
var CommentBox = React.createClass({
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

    handleCommentSubmit: function(comment) {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: comment,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.log(status);
          consoel.log(err);
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },

    render: function() {
      return (
        <div className="commentBox">
          <h1>Comments for Terracotta</h1>
          <CommentList data={this.state.data} />
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        </div>
      );
    }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <ul>
            <li>
                <span className="commentAuthor">
                  {this.props.author}
                </span>
            </li>
            <li>
                <span>1 day ago</span>
            </li>
        </ul>
        <p>
            {this.props.children}
        </p>
      </div>
    );
  }
});

var CommentForm = React.createClass({
    handleSumbit: function(e) {
        e.preventDefault();
        var author = this.refs.author.getDOMNode().value.trim();
        var text = this.refs.text.getDOMNode().value.trim();
        if (!text || !author) {
          return;
        }

        this.props.onCommentSubmit({author: author, text: text});

        this.refs.author.getDOMNode().value = '';
        this.refs.text.getDOMNode().value = '';
        return;
    },

    render: function() {
      return (
        <form className="commentForm" onSubmit={this.handleSumbit}>
          <input type="text" placeholder="Your name" ref="author" />
          <input type="text" placeholder="Say something..." ref="text" />
          <input type="submit" value="Post" />
        </form>
      );
    }
});

React.renderComponent(
  <CommentBox url="/comments"/>,
  document.getElementById('content')
);