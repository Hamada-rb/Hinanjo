import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class About extends React.Component {
    render() {
        return (
            <Jumbotron>
                <h1>浜田市緊急避難所アプリへようこそ</h1>
                <p>
                    あなたの現在位置を使い、周辺の避難所を一覧で表示してくれるアプリです。
                </p>
                <p>
                    また位置情報が有効になっていない場合は避難所を表示できません。その場合は位置情報を許可してから再度「避難所を探す」ボタンをクリックしてください。
                </p>
                <p className="text-danger">※避難場所が開設しているかなど各自で確認を行い避難してください</p>
            </Jumbotron>
        );
    }
}

export default About;
