import {
  Flex,
  Heading,
  Box,
  Button,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Text,
  Center,
} from "@chakra-ui/react";
import React, { useContext, useRef } from "react";
import { FaPrint } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CartContext from "../components/CartContext";
import { numberFormat } from "../hooks/numberFormat";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function Reciept() {
  const navigate = useNavigate();
  const printRef = useRef();

  const handlePrint = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("receipt.pdf");
  };

  return (
    <Center>
      <Box py={8}>
        <Button size="xs" mb={3} onClick={() => navigate("/")}>
          Go back
        </Button>
        <Box w="90vw" bg="white" shadow="xl" borderRadius="md">
          <div ref={printRef}>
            <Box p={6}>
              <Heading>Receipt</Heading>
              <Data />
            </Box>
          </div>
          <Box p={6}>
            <Button
              colorScheme="green"
              w="full"
              leftIcon={<FaPrint />}
              onClick={handlePrint}
            >
              Print
            </Button>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}

function Data() {
  const items = useContext(CartContext);
  var itemTotal = 0;
  items.map((item) => {
    itemTotal += item.price * item.qty;
  });
  return (
    <Box my={2} overflowX="scroll">
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th isNumeric>Total Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item) => {
            return (
              <DataItem
                key={item.id}
                title={item.title}
                price={item.price}
                qty={item.qty}
              />
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Td colSpan={4} isNumeric>
              <Text>Total</Text>
              <Text fontWeight="bold" color="green" fontSize="xl">
                {numberFormat(itemTotal)}
              </Text>
            </Td>
          </Tr>
        </Tfoot>
        <TableCaption>Date: {new Date().toDateString()}</TableCaption>
      </Table>
    </Box>
  );
}

function DataItem(props) {
  return (
    <Tr>
      <Td>{props.title}</Td>
      <Td>{numberFormat(props.price)}</Td>
      <Td>{props.qty === 1 ? props.qty + " pc" : props.qty + " pcs"}</Td>
      <Td fontWeight="semibold" isNumeric>
        {numberFormat(props.price * props.qty)}
      </Td>
    </Tr>
  );
}

export default Reciept;
