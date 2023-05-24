import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { PostCard } from "../../components/PostCard";
import { titleHelper } from "../../helpers";
import { Loader } from "../../components/global/Loader";
import { Empty } from "../../components/Empty";

export const Hero = ({
  posts: { travel, education, adventure, success_stories },
  loading,
}) => {
  return (
    <>
      <Container>
        {loading ? (
          <Loader height="500" align="center" />
        ) : !loading && travel ? (
          <Row>
            <Col xs={12} sm={6} className="ps-0 pe-0 pe-sm-1 mb-0">
              <PostCard
                className="post-card-full"
                postId={travel?._id ? travel?._id : ""}
                title={titleHelper(
                  travel?.title ? travel?.title : "no title",
                  60
                )}
                username={travel?.name ? travel?.name : "no user"}
                time={travel?.createdAt ? travel?.createdAt : Date.now()}
                imageUrl={travel?.selectedFile ? travel?.selectedFile : ""}
                category={
                  travel?.categories ? travel?.categories : "no category"
                }
                userId={travel?.creator?._id ? travel?.creator?._id : ""}
                full
              />
            </Col>
            <Col xs={12} sm={6} className="">
              <Row>
                <Col xs={12} sm={12} className="mb-0 mb-sm-2 pe-0 ps-0 ps-sm-1">
                  <PostCard
                    className="post-card-full"
                    postId={education?._id ? education?._id : ""}
                    title={titleHelper(
                      education?.title ? education?.title : "no title",
                      60
                    )}
                    username={education?.name ? education?.name : "no user"}
                    time={
                      education?.createdAt ? education?.createdAt : Date.now()
                    }
                    imageUrl={
                      education?.selectedFile ? education?.selectedFile : ""
                    }
                    category={
                      education?.categories
                        ? education?.categories
                        : "no category"
                    }
                    userId={
                      education?.creator?._id ? education?.creator?._id : ""
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  className="pe-0 pe-xs-1 ps-0 ps-sm-1"
                >
                  <PostCard
                    className="post-card-full"
                    postId={adventure?._id ? adventure?._id : ""}
                    title={titleHelper(
                      adventure?.title ? adventure?.title : "no title",
                      60
                    )}
                    username={adventure?.name ? adventure?.name : "no user"}
                    time={
                      adventure?.createdAt ? adventure?.createdAt : Date.now()
                    }
                    imageUrl={
                      adventure?.selectedFile ? adventure?.selectedFile : ""
                    }
                    category={
                      adventure?.categories
                        ? adventure?.categories
                        : "no category"
                    }
                    userId={
                      adventure?.creator?._id ? adventure?.creator?._id : ""
                    }
                  />
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  className="ps-0 pe-0 ps-sm-1 d-block d-sm-none d-md-block"
                >
                  <PostCard
                    className="post-card-full"
                    postId={success_stories?._id ? success_stories?._id : ""}
                    title={titleHelper(
                      success_stories?.title
                        ? success_stories?.title
                        : "no title",
                      60
                    )}
                    username={
                      success_stories?.name ? success_stories?.name : "no user"
                    }
                    time={
                      success_stories?.createdAt
                        ? success_stories?.createdAt
                        : Date.now()
                    }
                    imageUrl={
                      success_stories?.selectedFile
                        ? success_stories?.selectedFile
                        : ""
                    }
                    category={
                      success_stories?.categories
                        ? success_stories?.categories
                        : "no category"
                    }
                    userId={
                      success_stories?.creator?._id
                        ? success_stories?.creator?._id
                        : ""
                    }
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        ) : (
          <Empty height={450} logo back justify="center" fontSize={18}>
            Sorry! No posts found
          </Empty>
        )}
      </Container>
    </>
  );
};
