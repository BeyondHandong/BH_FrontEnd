import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { ContentState, EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DraftToHtml from "draftjs-to-html";

export default class TextArea extends Component {

    state = {
        editorState: EditorState.createWithContent(ContentState.createFromText('글 내용을 작성해주세요\n\n 욕설 및 특정 타겟 비방글 금지\n 정치 및 사회 관련 글 금지\n 홍보 및 판매 글 금지'))
    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        })
    }



    render() {
        const {editorState} = this.state;
        console.log(DraftToHtml(convertToRaw(editorState.getCurrentContent())));
        return (
            <div>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                    localization={{
                        locale: 'ko',
                      }}
                />
            </div>
        )
    }
}

