import React, {useEffect, useRef} from 'react';
import "../../static/css/detailPageStyle.scss";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import {GitHub} from "@mui/icons-material";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildIcon from '@mui/icons-material/Build';
import LabelIcon from '@mui/icons-material/Label';
import InfoIcon from '@mui/icons-material/Info';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import SwiperCore from "swiper";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Autoplay]) // Swiper



const DamsoDetail = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const clubService = useRef(null);
    const clubFeedService = useRef(null);
    const chatService = useRef(null);
    const profileService = useRef(null);
    const detailContainer = useRef(null);

    const selectedProject = location ? location.state.project : '';

    useEffect(() => {
        dispatch({type : 'project', select : selectedProject})
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
        event.target.style.color = 'rgb(234, 129, 129)';
    }
    function changeDefaultColor() {
        for(let i = 0; i < 4 ; i++){
            document.getElementById('project-service-list-container').children[i].style.color = '#333333de'
        }
    }
    const fixTopBar = (e) => {
        let currentWidth = detailContainer.current.offsetWidth + 'px';
        // console.log(currentWidth)
        if(e.target.scrollTop >= 1635) {
            changeDefaultColor();
            if (e.target.scrollTop >= profileService.current.offsetTop) {
                document.getElementById('project-service-list-container').children[3].style.color = 'rgb(234, 129, 129)';
            } else if(e.target.scrollTop < clubFeedService.current.offsetTop){
                document.getElementById('project-service-list-container').children[0].style.color = 'rgb(234, 129, 129)';
            } else if(e.target.scrollTop < chatService.current.offsetTop){
                document.getElementById('project-service-list-container').children[1].style.color = 'rgb(234, 129, 129)';
            } else if(e.target.scrollTop < profileService.current.offsetTop) {
                document.getElementById('project-service-list-container').children[2].style.color = 'rgb(234, 129, 129)';
            }
            document.getElementById('project-service-list-container').style.position = 'fixed';
            document.getElementById('project-service-list-container').style.margin = 0;
            document.getElementById('project-service-list-container').style.borderRadius = 0;
            document.getElementById('project-service-list-container').style.listStyle = 'none';
            document.getElementById('project-service-list-container').style.width = currentWidth;

        } else {
            changeDefaultColor();
            document.getElementById('project-service-list-container').style.position = '';
            document.getElementById('project-service-list-container').style.width = '90%';
            document.getElementById('project-service-list-container').style.listStyle = 'auto';
            document.getElementById('project-service-list-container').style.borderRadius = '10px';
            document.getElementById('project-service-list-container').style.margin = "20px auto";
        }

    }


    return (
        <div className="project-detail-wrapper"
             id={'project-detail-wrapper'}
             ref={detailContainer}
             style={{background:"#f0d9d680"}}
             onScroll={(e) => fixTopBar(e)}
        >
            <div className="project-detail-container">
                <div className="project-title-img-wrapper">
                    <h2>Instagram Clone Application, 담소 SNS - Spring/JSP</h2>
                    <div className="project-title-img" >
                        <img alt=''
                             style={{width:"90%"}}
                             src={require('../../static/img/damso-info.png')} />
                    </div>
                    <h3><a target="_blank" rel="noreferrer" href="https://github.com/olo02/AWS_fullstack_semi_project_SNS"><GitHub />Github Link</a></h3>
                    <h3><a target="_blank" rel="noreferrer" href="http://damso.olooe.city"><LaunchIcon /> Demo Site Link</a></h3>
                </div>
                <div className="project-info-wrapper">
                    <h3><InfoIcon />프로젝트 소개</h3>
                    <p className="project-info-summary">AWS 풀스택 개발자 양성과정 세미 프로젝트<br />개발기간 : 2022.03.24 ~ 2022.04.25</p>
                    <p>풀스택 개발자 과정 세미 프로젝트로 '담소' Web 개발 프로젝트를 진행하였습니다.<br /> 담소는 인스타그램 클론 애플리케이션으로, 인스타그램의 기본적인 기능에 네이버 밴드의 기능을 접목한 SNS 웹 애플리케이션입니다.
                        <br />
                        <br />
                        <span>- 구현 목표</span>
                        <br />본 프로젝트는 Spring Legacy 구조의 이해도를 높이는 것에 초점을 두었고,
                        <br />SNS의 특성상 필수적인 REST API를 통한 비동기 피드 구현 및 Web Socket을 사용한 채팅과 알림의 구현을 목표로 삼았습니다.
                    </p>
                    <h3 className="project-info-subject-title"><AssignmentIcon />주제 선정 이유</h3>
                    <div className="project-info-subject">
                        <li><span>학습 활용 및 개발 확장성</span><br />
                            본 프로젝트는 교육 과정에서 학습한 Jsp, Servlet, Mybatis, Spring 등을 활용할 수 있습니다.<br />
                            모든 기능이 비동기를 기반으로 삼고 있기에 REST API에 대한 학습을 심화할 수 있습니다.<br />
                            또한 기존의 기능을 확장하거나 추가적인 기능을 쉽게 구현할 수 있는 구조를 가지고 있습니다.</li>
                        <li><span>높은 구현 가능성</span><br />
                            이미 사용되고 있는 플랫폼에서 적절한 자료를 지원받거나 참고하기 수월했습니다.</li>
                        <li><span>개발 흥미와 활발한 참여도</span> <br />
                            팀원 모두 평소 SNS 플랫폼을 사용하고 있어 흥미를 가지고 적극적인 참여가 가능했습니다.</li>
                    </div>
                </div>
                <div className="project-infra-wrapper">
                    <h3><BuildIcon />개발 도구 및 환경</h3>
                    <div className="project-infra-list">
                        <img alt='' src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                        <img alt='' src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                        <br />
                        <img alt='' src="https://img.shields.io/badge/Spring MVC-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/Spring Security-6DB33F?style=for-the-badge&logo=Spring Security&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/Java Servlet-FF7800?style=for-the-badge&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/JSP-black?style=for-the-badge&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
                        <br />
                        <img alt='' src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=Nginx&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/apache tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=white" />
                    </div>
                </div>
                <div className="project-service-wrapper" id='project-service-wrapper'>
                    <div className="project-service-list">
                        <h3><BookmarkAddedIcon />담당 기능</h3>
                        <div className="project-service-list-container" id={'project-service-list-container'}>
                            <li onClick={(e) => {scrollToTab(clubService); clickTab(e)}} >모임</li>
                            <li onClick={(e) => {scrollToTab(clubFeedService); clickTab(e)}} >모임 피드</li>
                            <li onClick={(e) => {scrollToTab(chatService); clickTab(e)}} >채팅</li>
                            <li onClick={(e) => {scrollToTab(profileService); clickTab(e)}} >프로필 사진</li>
                        </div>
                    </div>
                    <div className="project-service-content" ref={clubService}>
                        <h1>모임 기능</h1>
                        <div className="project-service-content-preview">
                            <div><PlayCircleFilledWhiteIcon /></div>
                            <video
                                onMouseEnter={(e) => playVideo(e)}
                                onMouseLeave={(e) => pauseVideo(e)}
                                muted={true}
                                loop={true}
                                src={process.env.PUBLIC_URL + "/video/damso-club-create.mp4"} />
                        </div>
                        <div className="project-service-content-info">
                            <h3>기능 소개</h3>
                            <div className="project-service-content-info-container">
                                <li><span>나의 모임 목록</span>: 모임 탭에서 내가 가입한 모임의 목록을 확인할 수 있습니다.</li>
                                <li><span>모임 만들기</span>: 회원 누구나 모임을 만들어 운영할 수 있습니다.</li>
                                <li><span>비밀 모임 설정</span>: 비밀 모임과 공개 모임을 설정할 수 있습니다.</li>
                                <li><span>모임 피드</span>: 모임은 기본 피드와 별도의 모임 피드를 가집니다.</li>
                                <li><span>모임 검색</span>: 원하는 모임을 검색하여 찾을 수 있습니다.</li>
                                <li><span>모임 가입 / 탈퇴하기</span>: 원하는 모임에 가입하여 활동하고 탈퇴할 수 있습니다.</li>
                                <li style={{display:"flex", alignItems:"center"}}><ManageAccountsIcon /> <span>모임장</span>
                                    <ul>
                                        <li><span>모임 관리</span>: 모임 정보를 수정하고 관리할 수 있습니다.</li>
                                        <li><span>강제 탈퇴</span>: 모임원을 강제 탈퇴시킬 수 있습니다.</li>
                                        <li><span>모임 삭제</span>: 모임 삭제시, 모든 모임원과 모임 게시글 등도 함께 삭제됩니다.</li>
                                    </ul>
                                </li>
                            </div>
                        </div>
                        <div className="project-service-content-erd">
                            <h3>Entity Relationship</h3>
                            <img alt='' src={require('../../static/img/damso-club-erd.png')} />
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
                                        <h3>나의 모임 목록</h3>
                                        <div className="detail-content-text">
                                            <li>모임 탭에서 가입한 모임의 목록 확인 가능</li>
                                            <li>비밀 모임인 경우 자물쇠 표시</li>
                                            <li>모임장인 경우 왕관 표시</li>
                                        </div>
                                        <div className="detail-content">
                                            <img alt='' src={require('../../static/img/damso-club-tab.png')} />
                                            <img style={{maxWidth:380}} alt='' src={require('../../static/img/damso-club-my.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-service-content-detail-container">
                                        <h3>모임 만들기</h3>
                                        <div className="detail-content-text">
                                            <li>필수 요소 : 모임 이름</li>
                                            <li>선택 요소 : 모임 프로필 사진, 모임 소개, 동네, 가입질문, 비밀모임 설정</li>
                                            <li>모임 생성 시, 모임장은 모임에 자동 가입된 후 해당 모임 페이지로 이동</li>
                                        </div>
                                        <div className="detail-content">
                                            <img style={{maxWidth:150, borderRadius:20}} alt='' src={require('../../static/img/damso-club-create-btn.png')} />
                                            <img alt='' src={require('../../static/img/damso-club-create.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-service-content-detail-container">
                                        <h3>비밀 모임</h3>
                                        <div className="detail-content-text">
                                            <li>비밀 모임 설정 시, 가입자가 아닌 경우 모임 피드 확인 불가</li>
                                        </div>
                                        <div className="detail-content">
                                            <img style={{maxWidth: 550, maxHeight: 400}} alt='' src={require('../../static/img/damso-club-private.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-service-content-detail-container">
                                        <h3>모임 검색</h3>
                                        <div className="detail-content-text">
                                            <li>모임 이름으로 원하는 모임 검색 가능</li>
                                            <li>타자 입력 시마다 Restful 검색 결과 적용</li>
                                        </div>
                                        <div className="detail-content">
                                            <img alt='' src={require('../../static/img/damso-club-search-small.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-service-content-detail-container">
                                        <h3>모임 가입 / 탈퇴하기</h3>
                                        <div className="detail-content-text">
                                            <li>가입질문 유무에 따라 입력 후 가입 가능</li>
                                            <li>탈퇴 시, 모임 내 본인의 글 및 댓글 모두 삭제</li>
                                        </div>
                                        <div className="detail-content">
                                            <img style={{maxWidth:300}} alt='' src={require('../../static/img/damso-club-join2.png')} />
                                            <img style={{maxHeight:350}} alt='' src={require('../../static/img/damso-club-info-member.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-service-content-detail-container">
                                        <h3>모임장</h3>
                                        <div className="detail-content-text">
                                            <li>모임 상세 모달에서 모임원의 정보를 확인하고, 강제 탈퇴 가능</li>
                                            <li>Restful 모임 수정 가능</li>
                                            <li>삭제 시, 모임과 관련된 모든 정보도 함께 삭제</li>
                                        </div>
                                        <div className="detail-content">
                                            <img style={{maxHeight:350}}  alt='' src={require('../../static/img/damso-club-update.png')} />
                                            <img style={{maxHeight:350}}  alt='' src={require('../../static/img/damso-club-update2.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="project-service-content" ref={clubFeedService}>
                        <h1>모임 피드 기능</h1>
                        <div className="project-service-content-preview">
                            <div><PlayCircleFilledWhiteIcon /></div>
                            <video
                                onMouseEnter={(e) => playVideo(e)}
                                onMouseLeave={(e) => pauseVideo(e)}
                                muted={true}
                                loop={true}
                                src={process.env.PUBLIC_URL + "/video/damso-club-feed.mp4"} />
                        </div>
                        <div className="project-service-content-info">
                            <h3>기능 소개</h3>
                            <div className="project-service-content-info-container">
                                <li><span>Restful 모임 피드</span>: 모임은 기본 피드와 별도의 모임 피드를 가집니다.</li>
                                <li style={{display:"flex", alignItems:"center"}}><PeopleAltIcon /> <span>모임원</span>
                                    <ul>
                                        <li><span>글 작성 및 관리</span>: 글을 작성하고 관리할 수 있습니다.</li>
                                        <li><span>댓글 작성 및 관리</span>: 댓글을 작성하고 관리할 수 있습니다.</li>
                                        <li><span>좋아요 기능</span>: 글과 댓글에 좋아요를 누를 수 있습니다.</li>
                                    </ul>
                                </li>
                            </div>
                        </div>
                        <div className="project-service-content-erd">
                            <h3>Entity Relationship</h3>
                            <img style={{width:600}} alt='' src={require('../../static/img/damso-club-feed-erd.png')} />
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
                                        <h3>Restful 모임 피드</h3>
                                        <div className="detail-content-text">
                                            <li>글/댓글 CRUD 기능, 좋아요 기능 모두 Restful 기반</li>
                                            <li>글 10개씩 무한 스크롤 로딩</li>
                                        </div>
                                        <div className="detail-content">
                                            <img style={{maxWidth: 650, maxHeight:400}} alt='' src={require('../../static/img/damso-club-main.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-service-content-detail-container">
                                        <h3>글 작성하기</h3>
                                        <div className="detail-content-text">
                                            <li>일반 피드와 달리 텍스트 기반의 커뮤니티 구성</li>
                                            <li>CKEditor 적용</li>
                                            <li>해당 모임원만 글 작성 가능</li>
                                        </div>
                                        <div className="detail-content">
                                            <img alt='' src={require('../../static/img/damso-club-board-create.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>                                <SwiperSlide>
                                <div className="project-service-content-detail-container">
                                    <h3>댓글 작성하기</h3>
                                    <div className="detail-content-text">
                                        <li>작성한 댓글은 댓글 목록 최상단에 위치</li>
                                        <li>더보기 버튼으로 댓글 페이지네이션</li>
                                    </div>
                                    <div className="detail-content">
                                        <img alt='' src={require('../../static/img/damso-club-board-view.png')} />
                                    </div>
                                </div>
                            </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="project-service-content" ref={chatService}>
                        <h1>채팅 기능</h1>
                        <div className="project-service-content-preview">
                            <div><PlayCircleFilledWhiteIcon /></div>
                            <video
                                onMouseEnter={(e) => playVideo(e)}
                                onMouseLeave={(e) => pauseVideo(e)}
                                muted={true}
                                loop={true}
                                src={process.env.PUBLIC_URL + "/video/damso-chat-create.mp4"} />
                        </div>
                        <div className="project-service-content-info">
                            <h3>기능 소개</h3>
                            <div className="project-service-content-info-container"
                                 style={{padding: "20px 50px"}}>
                                <li><span>채팅방 목록</span>: 채팅방 목록을 확인할 수 있습니다.</li>
                                <li><span>채팅방 만들기</span>: 기존에 나눈 메시지 유무에 따라 새로운 채팅방이 생성됩니다.</li>
                                <li><span>채팅하기</span>: 특정 회원과 실시간으로 메시지를 주고 받을 수 있습니다.</li>
                                <li><span>읽음 / 안 읽음 표시</span>: 특정 회원과 실시간으로 메시지를 주고 받을 수 있습니다.</li>
                            </div>
                        </div>
                        <div className="project-service-content-erd">
                            <h3>Entity Relationship</h3>
                            <img alt='' src={require('../../static/img/damso-message-erd.png')} />
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
                                        <h3>채팅방 목록</h3>
                                        <div className="detail-content-text">
                                            <li>채팅 상대의 정보와 가장 최근 메시지의 내용 확인 가능</li>
                                            <li>웹소켓 통신으로 채팅방 목록 실시간 업데이트</li>
                                        </div>
                                        <div className="detail-content">
                                            <img alt='' src={require('../../static/img/damso-chat-small.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-service-content-detail-container">
                                        <h3>채팅방 만들기</h3>
                                        <div className="detail-content-text">
                                            <li>채팅방 또는 채팅 상대 클릭 시 채팅방 생성</li>
                                            <li>상대와 이미 나눈 메시지가 존재하는 경우, 기존 채팅방으로 연결</li>
                                        </div>
                                        <div className="detail-content">
                                            <img alt='' src={require('../../static/img/damso-chat-create.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-service-content-detail-container">
                                        <h3>채팅 하기</h3>
                                        <div className="detail-content-text">
                                            <li>웹소켓 통신과 Rest API 함께 적용</li>
                                            <li>웹소켓 통신이 다른 회원에게는 적용되지 않도록 조건문 설정</li>
                                            <li>가장 최근 메시지가 최하단에 위치</li>
                                        </div>
                                        <div className="detail-content">
                                            <img alt='' src={require('../../static/img/damso-chat-room.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-service-content-detail-container">
                                        <h3>읽음 / 안 읽음 표시</h3>
                                        <div className="detail-content-text">
                                            <li>미확인 메시지가 존재하는 채팅방 '●' 아이콘 표시</li>
                                            <li>미확인 메시지 '1' 아이콘 표시</li>
                                        </div>
                                        <div className="detail-content">
                                            <img alt='' src={require('../../static/img/damso-chat-list.png')} />
                                            <img alt='' src={require('../../static/img/damso-chat-read-icon.png')} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="project-service-content" ref={profileService}>
                        <h1>프로필 사진 기능</h1>
                        <div className="project-service-content-info"
                             style={{paddingTop:0}}>
                            <h3>기능 소개</h3>
                            <div className="project-service-content-info-container" style={{paddingTop: "20px"}}>
                                <li><span>회원 프로필 사진</span>: 회원은 프로필 사진을 설정하고 관리할 수 있습니다</li>
                                <li><span>모임 프로필 사진</span>: 모임장은 모임의 프로필 사진을 설정하고 관리할 수 있습니다</li>
                            </div>
                        </div>
                        <div className="project-service-content-erd">
                            <h3>Entity Relationship</h3>
                            <img alt='' src={require('../../static/img/damso-profile-erd.png')} />
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
                                        <h3>프로필 사진</h3>
                                        <div className="detail-content-text">
                                            <li>모든 회원은 프로필 사진을 설정하거나 삭제 가능</li>
                                            <li>프로필 사진이 미설정된 경우 기본 이미지로 대체</li>
                                            <li>게시글과 댓글 등에서 프로필 사진 함께 조회 가능</li>
                                        </div>
                                        <div className="detail-content">
                                            <img alt='' src={require('../../static/img/damso-profile-edit.png')} />
                                            <img alt='' src={require('../../static/img/damso-profile-read.png')} />
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

export default React.memo(DamsoDetail);