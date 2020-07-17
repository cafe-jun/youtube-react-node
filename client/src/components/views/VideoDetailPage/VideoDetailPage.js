import React, { useEffect, useState } from "react";
import { Row, Col, List, Avatar, Input } from "antd";
import SideVideo from "./Sections/SideVideo";
import Subscribe from "./Sections/Subscribe";
import Axios from "axios";

function VideoDetailPage(props) {
     const videoId = props.match.params.videoId;
     const [VideoDetail, setVideoDetail] = useState([]);
     const videoVariable = { videoId: videoId };

     useEffect(() => {
          Axios.post("/api/video/getVideoDetail", videoVariable).then(
               (response) => {
                    if (response.data.success) {
                         console.log(response.data.videoDetail.writer._id);
                         setVideoDetail(response.data.videoDetail);
                    } else {
                         alert("비디오 정보를 가져오는데 실패했습니다.");
                    }
               }
          );
     }, []);
     console.log(VideoDetail.writer);
     if (VideoDetail.writer) {
          return (
               <Row gutter={[16, 16]}>
                    <Col lg={18} xs={24}>
                         <div style={{ width: "100%", padding: "3rem 4rem" }}>
                              <video
                                   style={{ width: "100%" }}
                                   src={`http://localhost:5000/${VideoDetail.filePath}`}
                                   controls
                              />
                              <List.Item
                                   actions={[
                                        <Subscribe
                                             userTo={VideoDetail.writer}
                                             userFrom={localStorage.getItem(
                                                  "userId"
                                             )}
                                        />,
                                   ]}
                              >
                                   <List.Item.Meta
                                        avatar={
                                             <Avatar
                                                  src={VideoDetail.writer.email}
                                             />
                                        }
                                        title={VideoDetail.title}
                                        description={VideoDetail.description}
                                   />
                              </List.Item>
                              {/*Comment*/}
                         </div>
                    </Col>
                    <Col lg={6} xs={24}>
                         <SideVideo />
                    </Col>
               </Row>
          );
     } else {
          return <div>Loading ....</div>;
     }
}

export default VideoDetailPage;