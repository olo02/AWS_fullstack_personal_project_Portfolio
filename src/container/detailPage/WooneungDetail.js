import React, {useEffect, useRef} from 'react';
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
import {Swiper, SwiperSlide} from "swiper/react";

const WooneungDetail = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const snsService = useRef(null);
    const friendService = useRef(null);
    const communityService = useRef(null);
    const adminService = useRef(null);
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
        for(let i = 0; i < 3 ; i++){
            document.getElementById('damso-project-service-list-container').children[i].style.color = '#333333de'
        }
    }
    const fixTopBar = (e) => {
        let currentWidth = detailContainer.current.offsetWidth + 'px';
        // console.log(currentWidth)
        if(e.target.scrollTop >= 1635) {
            changeDefaultColor();
            if (e.target.scrollTop >= adminService.current.offsetTop) {
                document.getElementById('damso-project-service-list-container').children[2].style.color = 'rgb(234, 129, 129)';
            } else if(e.target.scrollTop < communityService.current.offsetTop){
                document.getElementById('damso-project-service-list-container').children[0].style.color = 'rgb(234, 129, 129)';
            } else if(e.target.scrollTop < adminService.current.offsetTop) {
                document.getElementById('damso-project-service-list-container').children[1].style.color = 'rgb(234, 129, 129)';
            }
            document.getElementById('damso-project-service-list-container').style.position = 'fixed';
            document.getElementById('damso-project-service-list-container').style.margin = 0;
            document.getElementById('damso-project-service-list-container').style.borderRadius = 0;
            document.getElementById('damso-project-service-list-container').style.listStyle = 'none';
            document.getElementById('damso-project-service-list-container').style.width = currentWidth;

        } else {
            changeDefaultColor();
            document.getElementById('damso-project-service-list-container').style.position = '';
            document.getElementById('damso-project-service-list-container').style.width = '90%';
            document.getElementById('damso-project-service-list-container').style.listStyle = 'auto';
            document.getElementById('damso-project-service-list-container').style.borderRadius = '10px';
            document.getElementById('damso-project-service-list-container').style.margin = "20px auto";
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
                    <h2>Plogging Game Application, 줍깅 - SpringBoot / React</h2>
                    <video
                        style={{width:"500px", marginBottom:10, borderRadius:20}}
                        onMouseEnter={(e) => playVideo(e)}
                        onMouseLeave={(e) => pauseVideo(e)}
                        muted={true}
                        loop={true}
                        src={process.env.PUBLIC_URL + "/video/jubging.mp4"} />
                    <h3><a target="_blank" rel="noreferrer" href="https://github.com/plogging-project"><GitHub />Github Link</a></h3>
                    <h3><a target="_blank" rel="noreferrer" href="https://jubging.olooe.city"><LaunchIcon /> Demo Site Link</a></h3>
                </div>
                <div className="project-info-wrapper">
                    <h3><InfoIcon />프로젝트 소개</h3>
                    <p className="project-info-summary">AWS 풀스택 개발자 양성과정 파이널 프로젝트<br />개발기간 : 2022.05.24 ~ 2022.07.03</p>
                    <p>풀스택 개발자 과정 파이널 프로젝트로 '줍깅' Web 개발 프로젝트를 진행하였습니다.<br />
                        줍깅 애플리케이션은 Tmap API와 GeoLocation API를 통해 사용자의 실시간 위치를 지도 위에 제공합니다.<br />
                        또한 서울두드림길 생태문화길 코스정보 API를 활용하여 추천 산책경로를 안내합니다.
                        <br />
                        <br />
                        <span>- 구현 목표</span>
                        <br />본 프로젝트는 SpringBoot와 SpringDataJPA의 사용 능숙도를 높이는 것에 초점을 두었고,
                        <br />React를 활용한 SPA 개발과 Restful 서비스의 구현을 중점을 하였습니다.
                        <br />더불어 공공 데이터 API의 데이터 마이닝과 스프링 시큐리티의 활용을 목표로 삼았습니다.
                    </p>
                    <h3 className="project-info-subject-title"><AssignmentIcon />주제 선정 이유</h3>
                    <div className="project-info-subject">
                        <li><span>기능적 요구</span><br />
                            - 다양한 외부 API를 사용할 수 있고 공공데이터를 활용할 수 있는 기능<br />
                            - 실질적으로 필요하고 공감할 수 있는 기능</li>
                        <li><span>필요정당성</span> <br />
                            - 거리의 쓰레기 문제 대두, 플로깅에 대한 화제<br />
                            - 그러나 플로깅에 대한 접근성이 부족한 실정</li>
                        <h4 style={{marginBottom:0}}><ChevronRightIcon />기능적 요구를 충족하고 개발 필요성이 공감되는 플로깅을 주제로 '줍깅'을 제작하게 되었습니다.</h4>
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
                        <img alt='' src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/Spring MVC-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/Spring Security-6DB33F?style=for-the-badge&logo=Spring Security&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
                        <img alt='' src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
                        <br />
                        <img alt='' src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=Nginx&logoColor=white" />
                        <img alt='' src="https://img.shields.io/badge/apache tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=white" />
                    </div>
                </div>
                <div className="project-service-wrapper" >
                    <div className="project-service-list">
                        <h3><BookmarkAddedIcon />담당 기능</h3>
                        <div className="project-service-list-container" id={'damso-project-service-list-container'}>
                            <li onClick={(e) => {scrollToTab(friendService); clickTab(e)}} >플친 및 SNS</li>
                            <li onClick={(e) => {scrollToTab(communityService); clickTab(e)}} >커뮤니티</li>
                            <li onClick={(e) => {scrollToTab(adminService); clickTab(e)}} >회원 : 관리자</li>
                        </div>
                    </div>
                    <div className="project-service-content" ref={friendService}>
                        <h1>플친 / SNS 기능</h1>
                        {/*<div className="project-service-content-preview">*/}
                        {/*    <div><PlayCircleFilledWhiteIcon /></div>*/}
                        {/*    <video*/}
                        {/*        onMouseEnter={(e) => playVideo(e)}*/}
                        {/*        onMouseLeave={(e) => pauseVideo(e)}*/}
                        {/*        muted={true}*/}
                        {/*        loop={true}*/}
                        {/*        src={process.env.PUBLIC_URL + "/video/damso-club-feed.mp4"} />*/}
                        {/*</div>*/}
                        <div className="project-service-content-info" style={{paddingTop:0}}>
                            <h3>기능 소개</h3>
                            <div className="project-service-content-info-container">
                                <li style={{display:"flex", alignItems:"center"}}><PersonAddIcon /> <span>플로깅 친구(플친)</span>
                                    <ul>
                                        <li><span>나의 친구 확인</span>: 나의 플친 리스트를 확인하 수 있습니다.</li>
                                        <li><span>회원 검색</span>: 아이디를 통해 회원을 검색할 수 있습니다.</li>
                                        <li><span>플친 요청 관리</span>: 나의 요청과 상대의 요청을 확인하고 관리할 수 있습니다.</li>
                                        <li><span>플친 신청</span>: 검색 결과 또는 상대의 프로필 페이지에서 플친을 신청할 수 있습니다.</li>
                                        <li><span>플친 차단</span>: 회원을 차단하여 더 이상의 관계를 막을 수 있습니다.</li>
                                    </ul>
                                </li>
                                <li style={{display:"flex", alignItems:"center"}}><EmailIcon /> <span>메시지</span>
                                    <ul>
                                        <li><span>메시지 확인</span>: 플친과 나눈 메시지 목록을 확인할 수 있습니다.</li>
                                        <li><span>메시지 보내기</span>: 나의 플친에게 메시지를 보낼 수 있습니다.</li>
                                    </ul>
                                </li>
                            </div>
                        </div>
                        <div className="project-service-content-erd">
                            <h3>Entity Relationship</h3>
                            <div style={{display:"flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                    <h4>플친</h4>
                                    <img style={{width:400}} alt='' src={require('../../static/img/jubging-friend-erd.png')} />
                                </div>
                                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                    <h4>메시지</h4>
                                    <img style={{width:400}} alt='' src={require('../../static/img/jubging-message-erd.png')} />
                                </div>
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
                                </SwiperSlide>
                                <SwiperSlide>
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
                    <div className="project-service-content" ref={communityService}>
                        <h1>커뮤니티 기능</h1>
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
                                 style={{padding: "20px 50px"}}>
                                <li><span>카테고리별 커뮤니티</span>: 플로깅글 / 일상글 카테고리로 게시글 목록을 확인할 수 있습니다.</li>
                                <li><span>첨부파일 글 작성</span>: 첨부파일이 포함된 글을 작성하고 관리할 수 있습니다.</li>
                                <li><span>댓글</span>: Restful 댓글을 관리하고 회원들과 소통할 수 있습니다.</li>
                                <li><span>페이지네이션</span>: 게시글과 댓글을 모두 페이지네이션을 적용하였습니다.</li>
                            </div>
                        </div>
                        <div className="project-service-content-erd">
                            <h3>Entity Relationship</h3>
                            <img alt='' src={require('../../static/img/jubging-message-erd.png')} />
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
                    <div className="project-service-content" ref={adminService}>
                        <h1>관리자 기능</h1>
                        <div className="project-service-content-info"
                             style={{paddingTop:0}}>
                            <h3>기능 소개</h3>
                            <div className="project-service-content-info-container" style={{paddingTop: "20px"}}>
                                <li><span>Security</span>: 관리자의 권한 유무에 따라 관리자 페이지의 접근이 활성화됩니다.</li>
                                <li><span>모든 정보 확인</span>: 관리자는 모든 회원의 모든 정보를 확인할 수 있습니다.</li>
                                <li><span>탭 이동</span>: 탭 선택을 통해 필요한 정보의 위치로 스크롤 이동할 수 있습니다.</li>
                            </div>
                        </div>
                        <div className="project-service-content-erd">
                            <h3>Entity Relationship</h3>
                            <img style={{maxHeight:300, width:"auto"}} alt='' src={require('../../static/img/jubging-admin-erd.png')} />
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

export default React.memo(WooneungDetail);