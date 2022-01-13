import { Box, Button, Container, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import data from "../assets/items.json";
import Item from "../components/Item";
import Wrapper from "../components/Wrapper";

function Home() {
  const [itemCount, setItemCount] = useState(15);
  return (
    <div>
      <Wrapper>
        <Container maxW="container.sm" py={6}>
          <SimpleGrid columns={[1, 2, 3]} spacing={4}>
            {data.slice(0, itemCount).map((item, index) => {
              return (
                <Item
                  key={index}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  type={item.type}
                  filename={item.filename}
                  rating={item.rating}
                />
              );
            })}
          </SimpleGrid>
          {data.length >= itemCount ? (
            <Button
              w="full"
              mt={6}
              colorScheme="green"
              variant='outline'
              onClick={() => setItemCount(itemCount + 15)}
            >
              Load more
            </Button>
          ) : null}
        </Container>
      </Wrapper>
    </div>
  );
}

export default Home;
