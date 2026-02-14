import { useMemo, useState } from "react";
import styled from "styled-components";
import NewsListStyles from "./NewsList.styles";
import NewsData from "./data/news.json";

const Wrapper = styled.div`${NewsListStyles.wrapper}`;
const Row = styled.div`${NewsListStyles.row}`;
const DateText = styled.span`${NewsListStyles.date}`;
const Text = styled.div`${NewsListStyles.text}`;
const Link = styled.a`${NewsListStyles.link}`;
const Controls = styled.div`${NewsListStyles.controls}`;
const ToggleButton = styled.button`${NewsListStyles.button}`;

const NewsList = ({ initialVisibleCount = 4 }) => {
  const [expanded, setExpanded] = useState(false);
  const allNews = NewsData.news;

  const visibleNews = useMemo(() => {
    if (expanded) return allNews;
    return allNews.slice(0, initialVisibleCount);
  }, [expanded, allNews, initialVisibleCount]);

  const hasMore = allNews.length > initialVisibleCount;

  return (
    <Wrapper>
      {visibleNews.map((item) => (
        <Row key={item.id}>
          <DateText>{item.date}</DateText>
          <Text>
            {item.text}
            {item.link && (
              <>
                {" "}
                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                  Read more
                </Link>
              </>
            )}
          </Text>
        </Row>
      ))}
      {hasMore && (
        <Controls>
          <ToggleButton type="button" onClick={() => setExpanded((prev) => !prev)}>
            {expanded ? "Show less" : `Show more (${allNews.length - initialVisibleCount})`}
          </ToggleButton>
        </Controls>
      )}
    </Wrapper>
  );
};

export default NewsList;
