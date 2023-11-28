"use client";

import { Box, Container, Heading, Center, Text, Stack } from "@chakra-ui/react";

export default function Overview() {
    return (
        <>
            <Box id="header" bgColor={"#E3F7EA"}>
                <Box>
                    <Container as={Stack} maxW={"7xl"} py={{ base: 12, md: 20 }}>
                        <Center>
                            <Heading
                                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                                color="black"
                            >
                                Chính sách và quy định chung
                            </Heading>
                        </Center>
                    </Container>
                </Box>
            </Box>
            <Box id="content">
                <Box>
                    <Container as={Stack} maxW={"7xl"} py={{ base: 12, md: 20 }}>
                        <Text fontSize="md">
                            Công ty Cổ phần Công nghệ truyền thông Việt Phát có Giấy chứng
                            nhận đăng ký doanh nghiệp số 0106342003 do Sở Kế hoạch và Đầu tư
                            Hà Nội cấp lần đầu ngày 22/10/2013, cấp thay đổi lần thứ 7 ngày
                            15/01/2020 (sau đây gọi là VPMedia) xin cảm ơn quý Khách hàng đã
                            tin tưởng và sử dụng dịch vụ cũng như hệ thống phần mềm cung cấp
                            dịch vụ của VPMedia. VBot là sản phẩm độc quyền do VPMedia quản lý
                            và phát triển. Hệ thống phần mềm của VBot được thiết lập tại địa
                            chỉ website: https://vbot.vn nhằm mục đích cung cấp cho khách hàng
                            dịch vụ tổng đài ảo tiện lợi, hiệu quả và tiết kiệm nhất hiện nay.
                            Trước khi đăng ký và sử dụng dịch vụ của VBot trên hệ thống phần
                            mềm này, quý Khách hàng vui lòng đọc kỹ các điều kiện và điều
                            khoản bên dưới.
                        </Text>
                        <br />
                        <Heading as="h4" size="md">
                            Điều khoản và điều kiện sử dụng
                        </Heading>
                        <Text fontSize="md">
                            Các điều khoản và điều kiện này (“Điều khoản sử dụng”) được áp
                            dụng cho việc người dùng truy cập và sử dụng dịch vụ được thiết
                            lập trên hệ thống phần mềm ứng dụng được thiết lập dành riêng cho
                            mạng điện thoại di động có thiết lập internet của VBot tại website
                            vbot.vn (“Ứng dụng”), cũng như tất cả các thông tin, chính sách
                            được cung cấp cho người dùng trên ứng dụng của VBot.
                        </Text>
                        <br />
                        <Heading as="h4" size="sm">
                            Tài khoản sử dụng
                        </Heading>
                        <Text fontSize="md">
                            Người dùng sẽ tạo một tài khoản với các thông tin cung cấp phải
                            đảm bảo đầy đủ và chính xác, tránh lạm dụng khai báo gian dối để
                            lợi dụng làm những việc trái với pháp luật.
                        </Text>
                        <br />
                        <Heading as="h4" size="md">
                            Quyền truy cập thông tin của bạn
                        </Heading>
                        <Heading as="h4" size="sm">
                            Quyền truy cập
                        </Heading>
                        <Text fontSize="md">
                            Khi bạn sử dụng VBot thì VBot có quyền truy cập vào một số thông
                            tin dữ liệu trên điện thoại của bạn:
                        </Text>
                        <Text fontSize="md">- Điện thoại</Text>
                        <Text fontSize="md">- Micro</Text>
                        <Text fontSize="md">- Bộ nhớ</Text>
                        <Text fontSize="md">- Danh bạ</Text>
                        <Text fontSize="md">- Máy ảnh</Text>
                        <Text fontSize="md">- Vị trí</Text>
                        <Text fontSize="md">
                            Tất cả những truy cập của chúng tôi chỉ thực hiện khi có sự đồng ý
                            của người dùng, vậy nên người dùng sẽ không có bất cứ quyền khiếu
                            nại hay tố cáo nào về quyền truy cập này.
                        </Text>
                        <br />
                        <Heading as="h4" size="sm">
                            Thông tin người dùng
                        </Heading>
                        <Text fontSize="md">
                            Chúng tôi thu thập các thông tin sau của bạn:
                        </Text>
                        <Text fontSize="md">- Tên, email, số điện thoại.</Text>
                        <Text fontSize="md">- Lưu trữ danh bạ của bạn trên ứng dụng.</Text>
                        <Text fontSize="md">- Các liên kết tài khoản của bạn.</Text>
                        <br />
                        <Heading as="h4" size="sm">
                            Các quy định xử lý vi phạm
                        </Heading>
                        <Text fontSize="md">
                            Nếu người dùng sử dụng ứng dụng với mục đích trái pháp luật thì
                            tài khoản người dùng sẽ bị xóa vĩnh viễn mà không nhận được bất cứ
                            chi phí bồi thường nào, ngược lại tùy vào mức độ vi phạm, có thể
                            người dùng sẽ phải đền bù thiệt hại do những hành vi của mình gây
                            ra.
                        </Text>
                        <Text fontSize="md">
                            (Link tham khảo:
                            https://thuvienphapluat.vn/van-ban/cong-nghe-thong-tin/Nghi-dinh-91-2020-ND-CP-chong-tin-nhan-rac-thu-dien-tu-rac-cuoc-goi-rac-427854.aspx)
                            Bạn sẽ chịu hoàn toàn trách nhiệm nếu vi phạm quy định của Nghị
                            định số 91/2020/NĐ-CP về chống tin nhắn rác, thư điện tử rác, cuộc
                            gọi rác. Nghị định này quy định về chống tin nhắn rác, thư điện tử
                            rác, cuộc gọi rác và quy định về quảng cáo bằng tin nhắn (SMS,
                            MMS, USSD), thư điện tử và gọi điện thoại; quyền và nghĩa vụ của
                            cơ quan, tổ chức, cá nhân và bổ sung quy định xử lý vi phạm hành
                            chính về tin nhắn rác, thư điện tử rác, cuộc gọi rác. Trách nhiệm
                            của người quảng cáo.
                        </Text>
                        <Text fontSize="md">
                            Phải kiểm tra Danh sách không quảng cáo quy định tại khoản 1 Điều
                            7 Nghị định này để tránh việc gửi tin nhắn đăng ký quảng cáo, tin
                            nhắn quảng cáo, gọi điện thoại quảng cáo đến các số điện thoại
                            trong danh sách này.
                        </Text>
                        <Text fontSize="md">
                            Chỉ được phép gửi tin nhắn quảng cáo, thư điện tử quảng cáo, gọi
                            điện thoại quảng cáo đến Người sử dụng khi được Người sử dụng đồng
                            ý trước về việc nhận quảng cáo qua một trong các cách sau:
                        </Text>
                        <Text fontSize="md">
                            - Đồng ý nhận tin nhắn quảng cáo sau khi Người quảng cáo gửi tin
                            nhắn đăng ký quảng cáo đầu tiên và duy nhất.
                        </Text>
                        <Text fontSize="md">
                            - Khai báo và xác nhận vào mẫu đăng ký trên giấy in, Cổng/Trang
                            thông tin điện tử, các ứng dụng trực tuyến, mạng xã hội của Người
                            quảng cáo.
                        </Text>
                        <Text fontSize="md">
                            - Gọi điện thoại hoặc nhắn tin đến tổng đài thoại của Người quảng
                            cáo để đăng ký.
                        </Text>
                        <Text fontSize="md">
                            - Sử dụng phần mềm hỗ trợ đăng ký nhận quảng cáo.
                        </Text>
                        <Text fontSize="md">
                            Cung cấp cho Người sử dụng công cụ tra cứu hoặc lưu trữ các thỏa
                            thuận về việc đăng ký, từ chối nhận tin nhắn quảng cáo, thư điện
                            tử quảng cáo, cuộc gọi quảng cáo trên Cổng/Trang thông tin điện
                            tử, mạng xã hội của mình để phục vụ việc thanh, kiểm tra và giải
                            quyết khiếu nại, tố cáo.
                        </Text>
                        <Text fontSize="md">
                            Chịu trách nhiệm và phải có biện pháp kiểm tra việc đã đồng ý
                            trước một cách rõ ràng của Người sử dụng khi gửi tin nhắn quảng
                            cáo, thư điện tử quảng cáo, gọi điện thoại quảng cáo.
                        </Text>
                        <Text fontSize="md">
                            Có giải pháp hợp lý, tạo điều kiện thuận lợi cho Người sử dụng
                            trong việc từ chối nhận tin nhắn quảng cáo theo Điều 16, thư điện
                            tử quảng cáo theo Điều 20 Nghị định này.
                        </Text>
                        <Text fontSize="md">
                            Phối hợp với doanh nghiệp cung cấp dịch vụ viễn thông, Internet,
                            thư điện tử và các cơ quan tổ chức khác có liên quan trong việc
                            quảng cáo qua tin nhắn, thư điện tử, gọi điện thoại.
                        </Text>
                        <Text fontSize="md">
                            Lưu trữ thông tin đăng ký nhận quảng cáo, thông tin yêu cầu từ
                            chối và thông tin xác nhận từ chối của người sử dụng để phục vụ
                            thanh tra, kiểm tra, giám sát trong thời gian tối thiểu là 01 năm.
                        </Text>
                        <Text fontSize="md">
                            Nguyên tắc gửi tin nhắn quảng cáo, thư điện tử quảng cáo, gọi điện
                            thoại quảng cáo:
                        </Text>
                        <Text fontSize="md">
                            - Không được phép gửi tin nhắn quảng cáo, gọi điện thoại quảng cáo
                            đến các số điện thoại nằm trong Danh sách không quảng cáo quy định
                            tại khoản 1 Điều 7 Nghị định này hoặc Người sử dụng không đồng ý
                            nhận quảng cáo trước đó.
                        </Text>
                        <Text fontSize="md">
                            - Đối với quảng cáo qua tin nhắn và đối với số điện thoại ngoài
                            Danh sách không quảng cáo, Người quảng cáo chỉ được phép gửi tin
                            nhắn đăng ký quảng cáo đầu tiên và duy nhất. Bộ Thông tin và
                            Truyền thông quy định chi tiết việc gửi tin nhắn đăng ký quảng
                            cáo.
                        </Text>
                        <Text fontSize="md">
                            - Trường hợp Người sử dụng từ chối nhận quảng cáo hoặc không trả
                            lời sau khi nhận tin nhắn đăng ký quảng cáo đầu tiên, Người quảng
                            cáo không được phép gửi bất kỳ tin nhắn đăng ký quảng cáo hoặc tin
                            nhắn quảng cáo nào đến số điện thoại đó.
                        </Text>
                        <Text fontSize="md">
                            - Phải chấm dứt việc gửi đến Người sử dụng nhận các tin nhắn quảng
                            cáo, thư điện tử quảng cáo hoặc thực hiện gọi điện thoại quảng cáo
                            ngay sau khi nhận được yêu cầu từ chối của Người sử dụng.
                        </Text>
                        <Text fontSize="md">
                            - Mỗi Người quảng cáo không được phép gửi quá 03 tin nhắn quảng
                            cáo tới một số điện thoại, 03 thư điện tử quảng cáo tới một địa
                            chỉ thư điện tử, 01 cuộc gọi điện thoại quảng cáo tới một số điện
                            thoại trong vòng 24 giờ trừ trường hợp đã có thỏa thuận khác với
                            Người sử dụng.
                        </Text>
                        <Text fontSize="md">
                            - Chỉ được gửi tin nhắn trong khoảng thời gian từ 07 giờ đến 22
                            giờ mỗi ngày, gọi điện thoại quảng cáo từ 08 giờ đến 17 giờ mỗi
                            ngày trừ trường hợp đã có thỏa thuận khác với Người sử dụng.
                        </Text>
                        <Text fontSize="md">
                            - Nội dung quảng cáo phải phù hợp với quy định của pháp luật về
                            quảng cáo.
                        </Text>
                        <Text fontSize="md">
                            - Chỉ được gửi tin nhắn quảng cáo, gọi điện thoại quảng cáo khi đã
                            được cấp tên định danh và không được phép sử dụng số điện thoại để
                            gửi tin nhắn quảng cáo hoặc gọi điện thoại quảng cáo.
                        </Text>
                        <Text fontSize="md">
                            Yêu cầu đối với cuộc gọi điện thoại quảng cáo:
                        </Text>
                        <Text fontSize="md">
                            - Mọi cuộc gọi điện thoại quảng cáo đều phải có đầy đủ thông tin
                            về người thực hiện cuộc gọi điện thoại quảng cáo (gồm tên, địa
                            chỉ) và được giới thiệu đầu tiên trước khi cung cấp nội dung quảng
                            cáo. Trong trường hợp quảng cáo cho các dịch vụ có thu cước thì
                            phải cung cấp đầy đủ thông tin về giá cước.
                        </Text>
                        <Text fontSize="md">
                            - Trường hợp Người sử dụng từ chối nhận cuộc gọi điện thoại quảng
                            cáo, Người quảng cáo phải chấm dứt ngay việc tiếp tục gọi điện
                            thoại quảng cáo đến Người sử dụng đó.
                        </Text>
                        <br />
                        <Heading as="h4" size="md">
                            Dịch vụ trên ứng dụng của VBot
                        </Heading>
                        <Text fontSize="md">
                            VBot là ứng dụng, giải pháp giúp bạn quản lý cửa hàng/doanh nghiệp
                            một cách dễ dàng, hiệu quả và tiết kiệm hơn.
                        </Text>
                        <Text fontSize="md">
                            Là hệ thống Call – Center hợp nhất các kênh chăm sóc khách hàng
                            của cửa hàng/doanh nghiệp (Điện thoại, Zalo OA, Facebook) trên một
                            hệ thống duy nhất với hai hình thức:
                        </Text>
                        <Text fontSize="md">- Inbound Call Center</Text>
                        <Text fontSize="md">- Outbound Call Center</Text>
                        <Text fontSize="md">
                            Tích hợp các đầu số 1900, 1800, số di động hoặc số cố định, Voice
                            Brandname, Zalo OA của doanh nghiệp làm hotline tổng đài để thực
                            hiện các cuộc gọi ra, tiếp nhận cuộc gọi đến. Người dùng có thể
                            thực hiện cuộc gọi ra bằng Voice Brandname hoặc bằng Zalo OA của
                            doanh nghiệp tới người dùng Zalo, tiếp nhận cuộc gọi đến bằng số
                            hotline và từ người dùng Zalo gọi tới Zalo OA của doanh nghiệp.
                        </Text>
                        <br />
                        <Heading as="h4" size="md">
                            Cước phí dịch vụ
                        </Heading>
                        <Text fontSize="md">
                            Bảng giá cước dịch vụ của VBot được thể hiện trên ứng dụng VBot
                            hoặc trên website https://vbot.vn/
                        </Text>
                        <Text fontSize="md">
                            Cước phí dịch vụ này có thể được thay đổi tùy từng thời điểm và
                            tình hình thị trường. (Cước phí dịch vụ này đã bao gồm VAT)
                        </Text>
                        <br />
                        <Heading as="h4" size="md">
                            Quy trình giao dịch
                        </Heading>
                        <Heading as="h4" size="sm">
                            Quy trình dành cho người mua hàng/sử dụng dịch vụ
                        </Heading>
                        <Text fontSize="md">
                            Khi khách hàng có nhu cầu mua hàng trên website vbot.vn, sẽ thực
                            hiện các bước sau:
                        </Text>
                        <Text fontSize="md">
                            - Tìm kiếm, tham khảo thông tin sản phẩm, dịch vụ mà người mua
                            đang quan tâm.
                        </Text>
                        <Text fontSize="md">
                            - Tham khảo thông tin giá và chính sách hỗ trợ của sản phẩm, dịch
                            vụ mà người mua đang có nhu cầu mua (tiêu chuẩn chất lượng, chế độ
                            bảo hành…).
                        </Text>
                        <Text fontSize="md">
                            - Đăng ký tài khoản (trên web vbot.vn hoặc ứng dụng VBot trên điện
                            thoại).
                        </Text>
                        <Text fontSize="md">
                            - Nạp tiền vào tài khoản (trên web) qua các hình thức:
                        </Text>
                        <Text fontSize="md">&nbsp;&nbsp;&nbsp;- Thanh toán trực tiếp.</Text>
                        <Text fontSize="md">
                            &nbsp;&nbsp;&nbsp;- Các thẻ ATM do các ngân hàng Việt Nam phát
                            hành.
                        </Text>
                        <Text fontSize="md">
                            &nbsp;&nbsp;&nbsp;- Qua ví điện tử: ZaloPay, MoMo,…- Các thẻ thanh
                            toán quốc tế: Visacard, Mastercard,…
                        </Text>
                        <Text fontSize="md">Quy định sử dụng tiền nạp:</Text>
                        <Text fontSize="md">
                            - Tiền nạp chỉ được phép dùng để thanh toán cho các sản phẩm/dịch
                            vụ mà Công ty Cổ phần Công nghệ Truyền thông Việt Phát được phép
                            cung cấp.
                        </Text>
                        <Text fontSize="md">
                            - Không cho phép người dùng thực hiện rút tiền mặt, chuyển khoản
                            giữa các người dùng.
                        </Text>
                        <Text fontSize="md">
                            Người mua thắc mắc, khiếu nại (nếu có) sẽ liên lạc trực tiếp tới
                            bộ phận chăm sóc khách hàng của VBot: hotline 0857 066 866 để nhận
                            được giải đáp.
                        </Text>
                        <br />
                        <Heading as="h4" size="md">
                            Đảm bảo an toàn giao dịch
                        </Heading>
                        <Text fontSize="md">
                            Khách hàng không nên đưa thông tin chi tiết về việc thanh toán với
                            bất kỳ ai với bất kỳ lý do, hình thức liên lạc nào. VBot không
                            chịu trách nhiệm về những thiệt hại hay rủi ro người dùng có thể
                            gánh chịu trong việc trao đổi thông tin của khách hàng qua
                            internet hay qua email.
                        </Text>
                        <Text fontSize="md">
                            Khách hàng tuyệt đối không sử dụng bất kỳ chương trình, công cụ
                            hay hình thức nào khác để can thiệp vào hệ thống hay làm thay đổi
                            cấu trúc dữ liệu. Nghiêm cấm việc phát tán, truyền bá hay cổ vũ
                            cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm nhập hệ
                            thống website. Mọi vi phạm sẽ bị xử lý theo Quy chế và Quy định
                            của Pháp luật.
                        </Text>
                        <Text fontSize="md">
                            Mọi thông tin giao dịch được bảo mật, trừ trường hợp buộc phải
                            cung cấp khi cơ quan Pháp luật yêu cầu.
                        </Text>
                        <br />
                        <Heading as="h4" size="md">
                            Quản lý thông tin xấu
                        </Heading>
                        <Text fontSize="md">
                            Người dùng sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt
                            động sử dụng dịch vụ dưới tên đăng ký, mật khẩu của mình. Người
                            dùng có trách nhiệm thông báo kịp thời cho VBot về những hành vi
                            sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký
                            và mật khẩu của bên thứ 3 để có biện pháp giải quyết phù hợp.
                        </Text>
                        <Text fontSize="md">
                            Người dùng không sử dụng dịch vụ của VBot vào những mục đich bất
                            hợp pháp, không hợp lý, lừa đảo, đe dọa, thăm dò thông tin bất hợp
                            pháp, phá hoại, tạo ra và/hoặc phát tán virus gây hư hại tới hệ
                            thống, cấu hình, truyền tải thông tin của VBot hay sử dụng dịch vụ
                            của mình vào mục đích đầu cơ, lũng loạn thị trường, sử dụng VBot
                            để kinh doanh cuộc gọi, gọi nhiều cuộc gọi rác trái với pháp luật.
                            Trong trường hợp vi phạm, người dùng phải chịu hoàn toàn trách
                            nhiệm về các hành vi của mình trước pháp luật.
                        </Text>
                        <Text fontSize="md">
                            Người dùng không được thay đổi, chỉnh sửa, gán ghép, sao chép,
                            truyền bá, phân phối, cung cấp và tạo những công cụ tương tự của
                            dịch vụ VBot cung cấp cho một bên thứ 3 nếu không được sự đồng ý
                            của VBot.
                        </Text>
                        <Text fontSize="md">
                            Người dùng không được hành động gây mất uy tín của VBot dưới mọi
                            hình thức như: gây mất đoàn kết giữa các người dùng bằng cách sử
                            dụng tên đăng ký thứ 2, thông qua một bên thứ 3 hoặc tuyên truyền,
                            phổ biến những thông tin không có lợi cho uy tín của VBot.
                        </Text>
                        <br />
                        <Heading as="h4" size="md">
                            Trách nhiệm trong trường hợp phát sinh lỗi kỹ thuật
                        </Heading>
                        <Text fontSize="md">
                            VBot cam kết nỗ lực đảm bảo sự an toàn và ổn định của toàn bộ hệ
                            thống kỹ thuật. Tuy nhiên, trong trường hợp xảy ra sự cố do lỗi
                            của VBot, VBot sẽ ngay lập tức áp dụng các biện pháp để đảm bảo
                            quyền lợi cho người dùng.
                        </Text>
                        <Text fontSize="md">
                            Trường hợp phát sinh lỗi kỹ thuật, lỗi phần mềm hoặc các lỗi khách
                            quan khác dẫn đến người dùng không thể tham gia giao dịch được thì
                            người dùng thông báo cho Ban quản lý VBot qua địa chỉ email
                            sale@vpmedia.vn, chúng tôi sẽ khắc phục lỗi trong thời gian sớm
                            nhất.
                        </Text>
                        <Text fontSize="md">
                            Tuy nhiên, Ban quản lý VBot sẽ không chịu trách nhiệm giải quyết
                            trong trường hợp thông báo của người dùng không đến được Ban quản
                            lý, phát sinh từ lỗi kỹ thuật, lỗi đường truyền, phần mềm hoặc các
                            lỗi khác không do Ban quản lý gây ra.
                        </Text>
                        <br />
                        <Heading as="h4" size="md">
                            Chính sách bản quyền
                        </Heading>
                        <Text fontSize="md">
                            Chính sách bản quyền của VBot được thiết lập đi kèm với Điều khoản
                            sử dụng này. Người dùng cam kết sẽ không vi phạm việc sử dụng, sao
                            chép hay phân phối bất kỳ nội dung, thông tin nào liên quan đến
                            hoặc được nêu ra trong Điều khoản sử dụng hoặc Chính sách bản
                            quyền của VBot.
                        </Text>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
