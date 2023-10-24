import b from '../../css/board.module.css';


const amount = 100;
function Board() {
    return(
        <>
            <div className={b.wrapper}>
                <div className={b.topText}>
                    전체게시판
                </div>
                <div className={b.smallText}>
                    커플과 솔로 관계없이 이용가능한 게시판입니다.
                </div>
                <div className={b.searchBar}>
                    <div className={b.select}>
                        <select>
                            <option>제목</option>
                            <option>글쓴이</option>
                        </select>
                    </div>
                    <div className={b.search}>
                        <input type="text" className={b.bar}/>
                    </div>
                    <div className={b.searchBtn}>
                        검색
                    </div>
                </div>
                <div className={b.mainContent}>
                    <div className={b.amount}>
                        총 게시물 {amount} 개
                    </div>
                    <table className={b.table}>
                        <thead>
                        <tr>
                            <th>순번</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>등록일</th>
                            <th>조회수</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>203</td>
                                <td>저는 엄마 아빠가 보고싶은데 언제오나요...ㅠㅠ 혼자는 외로워요</td>
                                <td>kimdough</td>
                                <td>2023/10/25</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>202</td>
                                <td>네....저도 너무 가고싶네요ㅠㅠㅠ 시험기간 넘 빡세요</td>
                                <td>kimmaya</td>
                                <td>2023/10/25</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>201</td>
                                <td>이제 슬슬 집에 가고싶어지네요... 다들 그런가요?</td>
                                <td>parkjiho</td>
                                <td>2023/10/25</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Board;