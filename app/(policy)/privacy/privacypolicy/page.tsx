"use client";

import {
    Box,
    Container,
    Heading,
    Center,
    Image,
    Text,
    Stack,
    Flex,
    Spacer,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";


import config from '../../../../next.config';

export default function PrivacyPolicy() {
    return (
        <>
            <Box id="header" bgColor={"#E3F7EA"}>
                <Box >
                    <Container as={Stack} maxW={"7xl"} py={{ base: 12, md: 20 }}>
                        <Center >
                            <Heading
                                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                                color="black"
                            >
                                CHÍNH SÁCH BẢO MẬT
                            </Heading>
                        </Center>

                    </Container>
                </Box>
            </Box>
            <Box id="content">
                <Box >
                    <Container as={Stack} maxW={"7xl"} py={{ base: 12, md: 20 }}>

                        <Heading as='h4' size='md'>
                            Mục đích thu thập thông tin cá nhân
                        </Heading>
                        <Text fontSize='md'>Công ty Cổ phần Công nghệ Truyền thông Việt Phát có thể thu thập thông tin về họ tên, số điện thoại, email, nội dung trong quá trình đăng ký tài khoản của người dùng và những thông tin khác liên quan đến việc kết nối đến trang web của chúng tôi. Toàn bộ thông tin được người dùng cung cấp và chúng tôi thu thập được sẽ được sử dụng với các mục đích sau:</Text>
                        <Text fontSize='md'>Xác nhận khi khách hàng mua các gói dịch vụ của VBot. <br />
                            Trả lời các thắc mắc của khách hàng: qua email, số điện thoại. <br />
                            Cải thiện và nâng cao chất lượng dịch vụ.</Text>
                        <br />
                        <Heading as='h4' size='md'>
                            Phạm vi thu thập thông tin
                        </Heading>
                        <Text fontSize='md'>Các thông tin chúng tôi thu thập bao gồm danh tính, ngày/tháng/năm sinh, số điện thoại, địa chỉ email, cookie truy cập trang web,…</Text>
                        <Text fontSize='md'>Chúng tôi sử dụng thông tin cá nhân của người dùng để liên lạc khi cần thiết, liên quan tới việc người dùng sử dụng website của chúng tôi, để trả lời các câu hỏi hoặc gửi tài liệu, thông tin của người dùng về quyền lợi trong quá trình sử dụng sản phẩm, dịch vụ VBot của Công ty Cổ phần Công nghệ Truyền thông Việt Phát.</Text>
                        <Text fontSize='md'>Ngoài ra, những thông tin liên quan đến Thẻ Tín Dụng hoặc tài khoản ngân hàng mà người dùng sử dụng trên website https://vbot.vn thông qua cổng thanh toán của bên thứ 3, Công ty Cổ phần Công nghệ Truyền thông Việt Phát tuyệt đối không lưu giữ bất kỳ thông tin nào.</Text>
                        <br />
                        <Heading as='h4' size='md'>
                            Thời gian lưu trữ thông tin
                        </Heading>
                        <Text fontSize='md'>Dữ liệu cá nhân được lưu trữ mãi mãi cho đến khi có yêu cầu hủy bỏ từ phía khách hàng. Yêu cầu hủy bỏ thông tin khách hàng gửi về địa chỉ email sale@vpmedia.vn</Text>
                        <br />
                        <Heading as='h4' size='md'>
                            Những người hoặc tổ chức có thể được tiếp cận với thông tin đó
                        </Heading>
                        <Text fontSize='md'>Với trang web của chúng tôi, việc bảo mật thông tin được đặt lên hàng đầu, chúng tôi sử dụng các biện pháp tốt nhất để bảo vệ thông tin cũng như việc thanh toán của người dùng.

                        </Text>
                        <Text fontSize='md'>Công ty Cổ phần Công nghệ Truyền thông Việt Phát cam kết không chia sẻ hay tiết lộ dữ liệu thông tin của người dùng cho một bên thứ 3. Ngoại trừ các trường hợp sau:</Text>
                        <Text fontSize='md'>- Ban giám đốc và nhân viên được ủy quyền trực tiếp từ Ban giám đốc Công ty Cổ phần Công nghệ Truyền thông Việt Phát. </Text>
                        <Text fontSize='md'>- Các cơ quan nhà nước có thẩm quyền với yêu cầu cụ thể.</Text>
                        <br />
                        <Heading as='h4' size='md'>
                            Địa chỉ của đơn vị thu thập và quản lý thông tin, bao gồm cách thức liên lạc để người tiêu dùng có thể hỏi về hoạt động thu thập, xử lý thông tin liên quan đến cá nhân của mình Công ty Cổ phần Công nghệ Truyền thông Việt Phát
                        </Heading>
                        <Text fontSize='md'>Số 3 ngách 4, ngõ 163 Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà Nội.</Text>
                        <Text fontSize='md'>0866 046 777</Text>
                        <Text fontSize='md'>sale@vpmedia.vn</Text>
                        <br />
                        <Heading as='h4' size='md'>
                            Phương thức và công cụ để người dùng tiếp nhận và chỉnh sửa thông tin cá nhân của mình trên hệ thống của VBot
                        </Heading>
                        <Text fontSize='md'>Bước 1: Khách hàng có thể gửi khiếu nại của mình đến VBot.vn qua các phương tiện sau:</Text>
                        <Text fontSize='md'>- Tại website của VBot.vn</Text>
                        <Text fontSize='md'>- Qua số điện thoại: 0866046777</Text>
                        <Text fontSize='md'>- Qua email: sale@vpmedia.vn</Text>
                        <Text fontSize='md'>- Tại văn phòng công ty: Số 3, 4/163 Nguyễn Khang, Quận Cầu Giấy.</Text>
                        <Text fontSize='md'>Bước 2: VBot.vn sẽ tiếp tục liên lạc với khách hàng để tìm ra nguyên nhân và xử lý triệt để.</Text>
                        <br />
                        <Heading as='h4' size='md'>
                            Cơ chế tiếp nhận và giải quyết khiếu nại của người tiêu dùng liên quan đến việc thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi đã thông báo
                        </Heading>
                        <Text fontSize='md'>Khách hàng có quyền gửi khiếu nại về việc lộ thông tin đến địa chỉ công ty hoặc qua email: sale@vpmedia.vn</Text>
                        <Text fontSize='md'>Công ty có trách nhiệm thực hiện các biện pháp kỹ thuật, nghiệp vụ để xác minh các nội dung được phản ánh.</Text>
                        <Text fontSize='md'>Thời gian xử lý phản ánh là 15-30 ngày.</Text>
                        <Text fontSize='md'>Chính sách này sẽ được hiển thị rõ ràng cho người tiêu dùng tại thời điểm thu thập thông tin.</Text>



                        {/* <Heading as='h4' size='md'>
                            nhân
                        </Heading>
                        <Text fontSize='md'>Next</Text>
                        <Text fontSize='md'>Next</Text>
                        <Text fontSize='md'>Next</Text>
                        <Text fontSize='md'>Next</Text>
                        <Text fontSize='md'>Next</Text>
                        <Text fontSize='md'>Next</Text>
                        <Text fontSize='md'>Next</Text> */}

                    </Container>
                </Box>
            </Box >

        </>


    );
}
