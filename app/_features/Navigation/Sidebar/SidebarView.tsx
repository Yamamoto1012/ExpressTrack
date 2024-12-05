import Image from "next/image"
import Icon from "../../../../public/Twitter_profile.png"

export const SidebarView = () => {
  return (
    <div className=" h-screen w-[150px] bg-[#2A2A36]">
      {/* アイコン */}
      <div className="flex flex-col items-center h-full">
        <div className="w-[120px] h-[120px]">
          <Image src={Icon} alt="アイコン" width={120} height={120} className="rounded" />
        </div>
        <div className="mt-2">
          <p>ユーザー名</p>
        </div>
      </div>
      {/* メニュー */}
      <div>
        {/* メニューの内容 */}
      </div>
    </div>
  )
}