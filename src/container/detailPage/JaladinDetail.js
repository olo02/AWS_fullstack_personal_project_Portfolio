import React, {useEffect, useRef} from 'react';
import "../../static/css/detailPageStyle.scss";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {GitHub} from "@mui/icons-material";
import LaunchIcon from "@mui/icons-material/Launch";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BuildIcon from "@mui/icons-material/Build";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmailIcon from "@mui/icons-material/Email";
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import SouthIcon from '@mui/icons-material/South';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import SwiperCore from "swiper";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Autoplay]) // Swiper


const JaladinDetail = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const bookDataCrawling = useRef(null);
    const bookService = useRef(null);
    const detailContainer = useRef(null);

    const selectedProject = location ? location.state.project : '';

    useEffect(() => {
        dispatch({type : 'project', nav : 'team', select : selectedProject})
    }, [])

    const playVideo = (event) => {
        event.target.play();
    }
    const pauseVideo = (e) => {
        e.target.pause();
    }

    const scrollToTab = (elementRef:React.MutableRefObject<HTMLButtonElement|null>) => {
        if (elementRef.current !== null) {
            const selectTab = elementRef.current.offsetTop + 30;
            document.getElementById('project-detail-wrapper').scrollTo({
                top: selectTab,
                behavior: 'auto'
            })
        }
    }

    async function clickTab(e) {
        changeDefaultColor();
        await changeColor(e);
    }
    function changeColor(event) {
        event.target.style.color = '#899ec0';
    }
    function changeDefaultColor() {
        for(let i = 0; i < 2 ; i++){
            document.getElementById('jaladin-project-service-list-container').children[i].style.color = '#333333de'
        }
    }
    const fixTopBar = (e) => {
        let currentWidth = detailContainer.current.offsetWidth + 'px';
        // console.log(currentWidth)
        if(e.target.scrollTop >= 1480) {
            changeDefaultColor();
            if (e.target.scrollTop >= bookService.current.offsetTop) {
                document.getElementById('jaladin-project-service-list-container').children[1].style.color = '#899ec0';
            } else if(e.target.scrollTop < bookService.current.offsetTop){
                document.getElementById('jaladin-project-service-list-container').children[0].style.color = '#899ec0';
            } 
            document.getElementById('jaladin-project-service-list-container').style.position = 'fixed';
            document.getElementById('jaladin-project-service-list-container').style.margin = 0;
            document.getElementById('jaladin-project-service-list-container').style.borderRadius = 0;
            document.getElementById('jaladin-project-service-list-container').style.listStyle = 'none';
            document.getElementById('jaladin-project-service-list-container').style.width = currentWidth;

        } else {
            changeDefaultColor();
            document.getElementById('jaladin-project-service-list-container').style.position = '';
            document.getElementById('jaladin-project-service-list-container').style.width = '90%';
            document.getElementById('jaladin-project-service-list-container').style.listStyle = 'auto';
            document.getElementById('jaladin-project-service-list-container').style.borderRadius = '10px';
            document.getElementById('jaladin-project-service-list-container').style.margin = "20px auto";
        }

    }


    return (
        <div className="project-detail-wrapper"
             id={'project-detail-wrapper'}
             ref={detailContainer}
             style={{background:"#ebf4f5"}}
             onScroll={(e) => fixTopBar(e)}
        >
            <div className="project-detail-container">
                <div className="project-title-img-wrapper">
                    <h2>온라인 서점, 잘라딘 - Java/CLI</h2>
                    <img
                        style={{width:"500px", marginBottom:10, borderRadius:20}}
                        alt={''}
                        src={require('../../static/img/bookstore-main.png')} />
                    <h3><a target="_blank" rel="noreferrer" href="https://github.com/olo02/AWS_fullstack_mini_project_BookStore"><GitHub />Github Link</a></h3>
                </div>
                <div className="project-info-wrapper">
                    <h3><InfoIcon />프로젝트 소개</h3>
                    <p className="project-info-summary">AWS 풀스택 개발자 양성과정 미니 프로젝트
                        <br />개발기간 : 2022.02.06 ~ 2022.02.15</p>
                    <p>풀스택 개발자 과정 한 달 차에 Java 내용 복습을 위해 첫 프로젝트로 작업하였습니다.<br />
                        사용자 인터페이스가 갖춰야할 기능인 CRUD를 효과적으로 구현할 수 있는 주제를 선정하고자 하였고,<br />
                        그 중 평소에 친숙하게 사용하였던 인터넷 서점관리시스템을 선택하게 되었습니다.
                        <br />
                        <br />
                        <span>- 구현 목표</span>
                        <br />(1) 객체지향 프로그래밍에 대한 이해
                        <br />(2) Java를 통한 기본적인 CRUD 기능을 구현
                        <br />(3) 싱글톤 패턴을 사용한 일관된 서비스 제공
                    </p>
                    <h3 className="project-info-subject-title"><AssignmentIcon />주제 선정 이유</h3>
                    <div className="project-info-subject">
                        <li><span>Java 학습 활용</span><br />
                            - Java를 학습한 초기 단계에서 기본적인 CRUD 기능 복습할 수 있습니다.</li>
                        <li><span>데이터 수집 용이</span> <br />
                            - 도서 데이터를 Kakao Rest API가 제공하고 있어서 사전 데이터 설정이 수월하였습니다.</li>
                    </div>
                </div>
                <div className="project-infra-wrapper">
                    <h3><BuildIcon />개발 도구 및 환경</h3>
                    <div className="project-infra-list">
                        <img alt='' src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white" />
                        <img src="https://img.shields.io/badge/subversion-809CC9?style=for-the-badge&logo=subversion&logoColor=white" />
                    </div>
                </div>
                <div className="project-service-wrapper" >
                    <div className="project-service-list">
                        <h3><BookmarkAddedIcon />담당 기능</h3>
                        <div className="project-service-list-container" id={'jaladin-project-service-list-container'}>
                            <li onClick={(e) => {scrollToTab(bookDataCrawling); clickTab(e)}} >도서 데이터 크롤링</li>
                            <li onClick={(e) => {scrollToTab(bookService); clickTab(e)}} >도서 서비스</li>
                        </div>
                    </div>
                    <div className="project-service-content" ref={bookDataCrawling}>
                        <h1>도서 데이터 크롤링</h1>
                        <div className="project-service-content-info" style={{paddingTop:0, display:'flex', flexDirection:'column', alignItems:'center'}}>
                            <h3 style={{width:'100%'}}>크롤링 과정</h3>
                            <div className="project-service-content-info-container">
                                <li style={{display:"flex", alignItems:"center", paddingBottom:30, width:"100%"}}><FindInPageIcon /> <span> API를 통해 수집한 초기 데이터</span>
                                    <ul>
                                        <li><span>Kakao Rest API 도서 검색 이용</span></li>
                                        <li><span>특정 키워드를 입력하여 데이터 크롤링</span></li>
                                    </ul>
                                </li>
                                <img
                                    style={{width:'90%', paddingBottom:30}}
                                    alt={''}
                                    src={require('../../static/img/jaladin-data-before.png')}
                                />
                                <SouthIcon style={{width:'100%'}} />
                                <li style={{display:"flex", alignItems:"center", padding:"30px 0", width:"100%"}}><AnalyticsIcon /> <span> 데이터 파싱</span>
                                    <ul>
                                        <li><span>초기 데이터에서 사용할 정보만 추출</span></li>
                                        <li><span>각 도서를 Book 객체 생성 문자열로 데이터 변환 작업</span></li>
                                    </ul>
                                </li>
                                <img
                                    style={{width:'90%', paddingBottom:30}}
                                    alt={''}
                                    src={require('../../static/img/jaladin-data-after.png')}
                                />
                                <SouthIcon style={{width:'100%'}}/>
                                <li style={{display:"flex", alignItems:"center", padding:"30px 0", width:"100%"}}><SaveAsIcon /> <span> 더미 데이터 활용</span>
                                    <ul>
                                        <li><span>BookService에서 도서 더미데이터로 활용</span></li>
                                    </ul>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="project-service-content" ref={bookService}>
                        <h1>도서 서비스</h1>
                        {/*<div className="project-service-content-preview" >*/}
                        {/*    <div><PlayCircleFilledWhiteIcon /></div>*/}
                        {/*    <video*/}
                        {/*        onMouseEnter={(e) => playVideo(e)}*/}
                        {/*        onMouseLeave={(e) => pauseVideo(e)}*/}
                        {/*        muted={true}*/}
                        {/*        loop={true}*/}
                        {/*        src={process.env.PUBLIC_URL + "/video/damso-chat-create.mp4"} />*/}
                        {/*</div>*/}
                        <div className="project-service-content-info" style={{paddingTop:0}}>
                            <h3>기능 소개</h3>
                            <div className="project-service-content-info-container"
                                 style={{padding: "40px 50px 20px"}}>
                                <li><span>도서 검색</span>: isbn코드로 원하는 도서를 검색할 수 있습니다.</li>
                                <li><span>페이지네이션</span>: 결과 확인 편의에 따라 도서 검색 결과는 8개씩, 관리자 도서 목록은 10개씩 페이지네이션</li>
                                <li style={{display:"flex", alignItems:"center"}}><MapsHomeWorkIcon /><span>출판사</span>
                                    <ul>
                                        <li><span>도서 등록</span>: 도서 등록을 신청하고 관리할 수 있습니다.</li>
                                    </ul>
                                </li>
                                <li style={{display:"flex", alignItems:"center"}}><AdminPanelSettingsIcon /><span>관리자</span>
                                    <ul>
                                        <li><span>신청 도서 관리</span>: 출판사가 신청한 도서를 관리할 수 있습니다.</li>
                                        <li><span>추천도서 관리</span>: isbn코드로 추천도서를 설정할 수 있습니다.</li>
                                    </ul>
                                </li>
                            </div>
                        </div>
                        <div className="project-service-content-detail">
                            <h3>세부 기능</h3>
                            <Swiper
                                style={{width:"100%"}}
                                autoplay={{
                                    delay: 5000,
                                }}
                                slidesPerView={1}
                                initialSlide={0}
                                observer={true}
                                observeParents={true}
                                spaceBetween={50}
                                navigation
                                scrollbar={{ draggable: true }}
                            >
                                <SwiperSlide>
                                    <div className="project-service-content-detail-container">
                                        <h3>도서 검색</h3>
                                        <div className="detail-content-text">
                                            <li>책 제목, 작가, isbn 코드를 통해 검색</li>
                                            <li>제목 검색 시, 검색 키워드를 포함한 도서 결과 모두 출력</li>
                                            <li>검색 키워드의 공백 무시 처리</li>
                                        </div>
                                        <div className="detail-content">
                                            <img alt='' src={require('../../static/img/jaladin-search.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-service-content-detail-container">
                                        <h3>페이지네이션</h3>
                                        <div className="detail-content-text">
                                            <li>결과 확인 편의성에 따라 검색 페이징과 관리자의 페이징 상이한 형태</li>
                                            <li>엔터 시, 다음 페이지로 이동</li>
                                            <li>더 이상 다음페이지 없을 경우 '마지막 페이지' 출력</li>
                                        </div>
                                        <div className="detail-content">
                                            <img alt='' src={require('../../static/img/jaladin-search-paging.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-service-content-detail-container">
                                        <h3>출판사<br />- 도서 등록</h3>
                                        <div className="detail-content-text">
                                            <li>isbn 코드로 해당 출판사의 도서 상품 신청</li>
                                            <li>isbn 코드 중복 검사</li>
                                            <li>isbn 코드로 해당 출판사의 도서 상품 수정</li>
                                        </div>
                                        <div className="detail-content">
                                            <img alt='' src={require('../../static/img/jaladin-publisher-request.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-service-content-detail-container">
                                        <h3>관리자<br />- 신청 도서 관리</h3>
                                        <div className="detail-content-text">
                                            <li>출판사가 신청한 상품 목록 확인</li>
                                            <li>10개씩 페이지네이션</li>
                                        </div>
                                        <div className="detail-content">
                                            <img alt='' src={require('../../static/img/jaladin-admin-request.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-service-content-detail-container">
                                        <h3>관리자<br />- 추천도서 관리</h3>
                                        <div className="detail-content-text">
                                            <li>추천도서 선정 및 해제</li>
                                            <li>토글 기능으로 구현</li>
                                        </div>
                                        <div className="detail-content">
                                            <img alt='' src={require('../../static/img/jaladin-admin-pick.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default React.memo(JaladinDetail);