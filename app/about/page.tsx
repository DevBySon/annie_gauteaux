import {raleway} from "@/assets/fonts";
import {cn} from "@/lib/utils";
import Footer from "@/components/layout/Footer";
import HeaderLayout from "@/components/layout/Header";
import React from "react";

const About = () => {
    return (
        <>
            <HeaderLayout />
            <div>
                <div
                    className="bg-[url('~/assets/images/header-bg-about.png')] w-full h-0 pt-[27%] bg-no-repeat bg-contain relative">
                    <div className="max-w-screen-lg w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                        <h1 className={cn(raleway.className, "text-[42px] leading-relaxed font-bold text-white")}>
                            About Us
                        </h1>
                        <h4 className={cn(raleway.className, "text-[20px] leading-[180%] text-white")}>Annie Gateaux</h4>
                    </div>
                </div>
                <div className="flex flex-col gap-[128px] mt-16">
                <span className={cn(raleway.className, "max-w-screen-lg w-full mx-auto leading-loose text-justify")}>
                    Với hơn 10 năm kinh nghiệm trong lĩnh vực làm bánh, chúng tôi tự hào là thương hiệu bánh ngọt cao cấp hàng đầu Việt Nam, quy tụ những chuyên gia đầu ngành, mang đến cho khách hàng những sản phẩm chất lượng tốt nhất cùng dịch vụ hoàn hảo.
                </span>
                    <div className="flex flex-col gap-4 items-center">
                        <h1 className={cn(raleway.className, "text-[34px] leading-relaxed font-semibold")}>
                            “Từ tình yêu với một chiếc bánh ngọt”
                        </h1>
                        <span className={cn(raleway.className, "leading-loose max-w-screen-lg w-full")}>
                        Câu chuyện có thật từ Founder của Annie Gâteaux - anh Nguyễn Minh Trí chia sẻ: “Hồi còn nhỏ, mình từng rất khao khát có được một chiếc bánh kem cho ngày sinh nhật. Ngày đó nhà mình rất nghèo, vậy nên mỗi năm đến ngày sinh nhật, mẹ sẽ đều làm cho mình một chiếc bánh hấp từ bột mì, và cắm thêm một vài cây nến. Trong một lần đi dự sinh nhật của bạn hàng xóm, đó là lần đầu tiên mình được nếm thử vị của bánh kem. Không có mỹ từ nào có thể diễn tả được cảm xúc lúc ấy. Thì ra bánh kem ngon đến như vậy, mùi vị này những đứa trẻ nhà giàu mới đã ăn đến phát ngán, thế nhưng với mình, nó như một  thứ gì đó mà có mơ mình cũng luôn mơ đến nó.
                        <br/>
                        <br/>
                        Từ lúc ấy, mình bắt đầu nuôi trong lòng một ý chí mạnh mẽ: mình muốn sau này lớn lên, có thể tạo ra những chiếc bánh tuyệt hảo như vậy và chia sẻ niềm yêu thương đó với mọi người. Ý tưởng về việc mở một tiệm bánh đã trở thành ngọn lửa thắp sáng trong tâm hồn của một đứa trẻ lên 5.
                    </span>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <h1 className={cn(raleway.className, "text-[34px] leading-relaxed font-semibold")}>
                            “Cho đến sứ mệnh mang lại hạnh phúc”
                        </h1>
                        <span className={cn(raleway.className, "leading-loose max-w-screen-lg w-full")}>
                        Tôi bắt đầu học hỏi về nghệ thuật làm bánh, từ cách lựa chọn nguyên liệu đến kỹ thuật trang trí và pha chế hương vị. Từng ngày trôi qua, tôi đắm chìm trong thế giới của mỹ phẩm bánh ngọt, không ngừng rèn luyện kỹ năng và kiến thức của mình.
                        Qua thời gian, tôi không chỉ học được cách làm bánh mà còn trải qua những trải nghiệm thực tế trong ngành. Tôi đã làm việc cùng những chuyên gia giàu kinh nghiệm, họ đã truyền cho tôi những bí quyết và bí mật của nghề. Từ những lỗi lầm và thất bại, tôi càng thêm quyết tâm và kiên nhẫn.
                        <br/>
                        <br/>
                        Cuối cùng, sau nhiều nỗ lực không ngừng, tôi đã quyết định thực hiện ước mơ của mình. Tôi mở một tiệm bánh riêng, mang tên &quot;Annie Gateaux&quot;. Đây là nơi tôi gửi gắm tất cả niềm đam mê và tình yêu của mình vào từng chiếc bánh mà tôi tạo ra.
                        Tiệm bánh Annie Gâteaux không chỉ là nơi để khách hàng thưởng thức những chiếc bánh ngọt tuyệt vời, mà còn là không gian để mọi người tận hưởng những khoảnh khắc đáng nhớ bên gia đình và bạn bè.
                    </span>
                    </div>
                </div>
                <Footer isSlate/>
            </div>
        </>
    )
}

export default About;