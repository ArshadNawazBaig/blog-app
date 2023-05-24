import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Empty } from "../../components/Empty";
import { Heading } from "../../components/global/Heading";
import { Loader } from "../../components/global/Loader";
import { PostCard } from "../../components/PostCard";
import { PostRoundCard } from "../../components/PostRoundCard";
import { titleHelper } from "../../helpers";
import { WorldWrapper } from "./style";

export const World = ({
  posts: { entertainment, fashion, life_style, world },
  loading,
}) => {
  return (
    <WorldWrapper>
      <Container className="py-4">
        <Row>
          <Col className="py-3">
            <Heading>Popular</Heading>
          </Col>
        </Row>
        {loading ? (
          <Loader align="center" height="410" />
        ) : !loading && entertainment ? (
          <Row>
            <Col
              md={6}
              className="mb-0 mb-sm-4 mb-md-0"
              style={{ minHeight: "50vh" }}
            >
              <PostCard
                className="post-card-full"
                postId={entertainment?._id ? entertainment?._id : ""}
                title={titleHelper(
                  entertainment?.title ? entertainment?.title : "no title",
                  60
                )}
                username={entertainment?.name ? entertainment?.name : "no user"}
                time={
                  entertainment?.createdAt
                    ? entertainment?.createdAt
                    : Date.now()
                }
                imageUrl={
                  entertainment?.selectedFile ? entertainment?.selectedFile : ""
                }
                category={
                  entertainment?.categories
                    ? entertainment?.categories
                    : "no category"
                }
                userId={
                  entertainment?.creator?._id ? entertainment?.creator?._id : ""
                }
                full
              />
            </Col>
            <Col md={6} xl={3} style={{ minHeight: "60vh" }}>
              <Row style={{ height: "50%" }}>
                <Col className="mt-4 mt-sm-0">
                  <PostCard
                    full
                    className="post-card-full"
                    postId={fashion?._id ? fashion?._id : ""}
                    title={titleHelper(
                      fashion?.title ? fashion?.title : "no title",
                      30
                    )}
                    username={fashion?.name ? fashion?.name : "no user"}
                    time={fashion?.createdAt ? fashion?.createdAt : Date.now()}
                    imageUrl={
                      fashion?.selectedFile ? fashion?.selectedFile : ""
                    }
                    category={
                      fashion?.categories ? fashion?.categories : "no category"
                    }
                    userId={fashion?.creator?._id ? fashion?.creator?._id : ""}
                  />
                </Col>
              </Row>
              <Row style={{ height: "50%" }}>
                <Col className="mt-4">
                  <PostCard
                    full
                    className="post-card-full"
                    postId={life_style?._id ? life_style?._id : ""}
                    title={titleHelper(
                      life_style?.title ? life_style?.title : "no title",
                      30
                    )}
                    username={life_style?.name ? life_style?.name : "no user"}
                    time={
                      life_style?.createdAt ? life_style?.createdAt : Date.now()
                    }
                    imageUrl={
                      life_style?.selectedFile ? life_style?.selectedFile : ""
                    }
                    category={
                      life_style?.categories
                        ? life_style?.categories
                        : "no category"
                    }
                    userId={
                      life_style?.creator?._id ? life_style?.creator?._id : ""
                    }
                  />
                </Col>
              </Row>
            </Col>
            <Col md={12} xl={3} className="h-100 mt-4 mt-xl-0">
              <Row className="round-cards-outer">
                {world?.length > 0 &&
                  world?.map(
                    ({ _id, title, selectedFile, createdAt }, index) => (
                      <Col
                        md={6}
                        xl={12}
                        key={index}
                        className="round-card-wrapper"
                      >
                        <PostRoundCard
                          heading={titleHelper(title, 35)}
                          time={createdAt}
                          imgUrl={selectedFile}
                          postId={_id}
                        />
                      </Col>
                    )
                  )}
              </Row>
            </Col>
          </Row>
        ) : (
          <Empty height={500} justify="center" fontSize={20}>
            No posts found
          </Empty>
        )}
      </Container>
    </WorldWrapper>
  );
};
