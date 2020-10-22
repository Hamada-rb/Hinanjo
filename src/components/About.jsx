import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class About extends React.Component {
    render() {
        return (
            <Jumbotron>
                <h1>浜田市避難所アプリへようこそ</h1>
                <p>
                    あなたの現在位置を使い、周辺の避難所を一覧で表示してくれるアプリです。
                </p>
                <p>
                    また位置情報が有効になっていない場合は避難所を表示できません。その場合は位置情報を許可してから再度「避難所を探す」ボタンをクリックしてください。
                </p>
                <p className="text-danger">※実際の避難所の開設状況については、浜田市防災行政無線、浜田市防災防犯メール、テレビのデータ放送など、浜田市が発信する情報により確認してください</p>
                <p className="text-danger">※アプリで表示される道順は、浸水・倒木など周囲の被災状況により、使用できない可能性があります。周囲をよく確認し、行動してください</p>
                <p className="text-danger">※避難所に行くことだけが避難ではありません。親戚・知人宅、ホテル等への宿泊も含め、災害の状況に応じた最も安全な場所を、日ごろから検討してください</p>
            </Jumbotron>
        );
    }
}

export default About;
