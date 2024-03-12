"use client";
import { BiLogoSpotify } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationRoutes } from "./navigation-routes";
import { useSidebarStore } from "@/stores/sidebar-store";
import { ActionTooltip } from "@/components/ActionTooltip";
import { cn } from "@/utils/cn";
import { useSession } from "next-auth/react";

export const NavigationSection = () => {
	const pathname = usePathname();
	const { isOpen } = useSidebarStore();
	const { status } = useSession();

	return (
		<nav>
			<ul className="flex flex-col" role="list">
				{status === "unauthenticated" && (
					<li className="py-1 px-3">
						<Link href="/">
							{/* <svg
								role="img"
								viewBox="0 0 78 24"
								ariaLabel="Spotify"
								ariaHidden="false"
								height="24"
								dataEncoreId="logoSpotify"
								class="Svg-sc-6c3c1v-0 dDJltW"
							>
								<title>Spotify</title>
								<path d="M31.8234 11.0782C29.8042 10.5836 29.4444 10.2376 29.4444 9.50832C29.4444 8.8202 30.077 8.35677 31.0159 8.35677C31.9262 8.35677 32.8296 8.70885 33.7765 9.43308C33.8051 9.45515 33.8407 9.46318 33.8763 9.45816C33.8937 9.45541 33.9104 9.4491 33.9253 9.43962C33.9403 9.43013 33.9532 9.41767 33.9633 9.40299L34.9496 7.97659C34.9691 7.9483 34.9774 7.91361 34.9728 7.87941C34.9682 7.84522 34.9511 7.81402 34.9249 7.79203C33.7982 6.86416 32.5291 6.41378 31.0456 6.41378C28.8653 6.41378 27.3422 7.75591 27.3422 9.67684C27.3422 11.7372 28.6567 12.4654 30.927 13.0292C32.8592 13.4856 33.1854 13.8688 33.1854 14.5529C33.1854 15.3102 32.5262 15.7817 31.4647 15.7817C30.2855 15.7817 29.3239 15.3744 28.2485 14.4185C28.2354 14.4066 28.22 14.3975 28.2033 14.3918C28.1866 14.3861 28.169 14.3839 28.1515 14.3853C28.1339 14.3867 28.1168 14.3917 28.1012 14.4C28.0856 14.4083 28.0719 14.4197 28.0607 14.4335L26.9547 15.7837C26.9322 15.8106 26.921 15.8454 26.9234 15.8806C26.9258 15.9158 26.9416 15.9487 26.9676 15.9722C28.2199 17.1188 29.7587 17.7236 31.4192 17.7236C33.7695 17.7236 35.2877 16.4066 35.2877 14.3683C35.2877 12.645 34.2845 11.6921 31.8234 11.0782ZM42.31 13.3873C42.31 14.8418 41.4363 15.8579 40.185 15.8579C38.9496 15.8579 38.0165 14.7966 38.0165 13.3873C38.0165 11.9789 38.9486 10.9177 40.186 10.9177C41.4165 10.9177 42.31 11.9559 42.31 13.3873ZM40.6041 9.03385C39.5861 9.03385 38.7499 9.44613 38.061 10.2897V9.3408C38.0613 9.30506 38.0476 9.27066 38.023 9.2451C37.9984 9.21955 37.9648 9.20491 37.9296 9.20438H36.1209C36.1033 9.20451 36.086 9.20814 36.0699 9.21507C36.0537 9.222 36.0391 9.23208 36.0268 9.24475C36.0145 9.25742 36.0048 9.27242 35.9982 9.2889C35.9916 9.30538 35.9883 9.32302 35.9884 9.3408V19.8873C35.9884 19.9626 36.0477 20.0237 36.1209 20.0237H37.9296C37.9648 20.0232 37.9984 20.0086 38.023 19.983C38.0476 19.9575 38.0613 19.9231 38.061 19.8873V16.5581C38.7509 17.3515 39.5861 17.7387 40.6041 17.7387C42.4968 17.7387 44.4123 16.2441 44.4123 13.3873C44.4123 10.5295 42.4968 9.03385 40.6041 9.03385ZM49.3235 15.8729C48.0267 15.8729 47.0502 14.8046 47.0502 13.3873C47.0502 11.9649 47.9931 10.9317 49.2938 10.9317C50.5985 10.9317 51.5819 12.001 51.5819 13.4194C51.5819 14.8408 50.6331 15.8729 49.3235 15.8729ZM49.3235 9.03486C46.8862 9.03486 44.9766 10.9608 44.9766 13.4184C44.9766 15.8499 46.8733 17.7557 49.2938 17.7557C51.739 17.7557 53.6545 15.8368 53.6545 13.3873C53.6545 10.9468 51.7529 9.03385 49.3235 9.03385V9.03486ZM58.8592 9.20438H56.8697V7.11795C56.8699 7.10013 56.8667 7.08243 56.8601 7.06589C56.8536 7.04935 56.8439 7.0343 56.8316 7.0216C56.8192 7.00891 56.8046 6.99883 56.7884 6.99195C56.7722 6.98507 56.7548 6.98152 56.7372 6.98153H54.9285C54.8935 6.98205 54.86 6.99655 54.8354 7.02189C54.8108 7.04723 54.797 7.08137 54.797 7.11694V9.20438H53.9273C53.9098 9.20451 53.8925 9.20815 53.8764 9.21509C53.8604 9.22203 53.8458 9.23213 53.8336 9.24481C53.8213 9.25749 53.8117 9.2725 53.8052 9.28898C53.7988 9.30545 53.7956 9.32306 53.7958 9.3408V10.9357C53.7958 11.0099 53.8551 11.0711 53.9273 11.0711H54.797V15.1969C54.797 16.864 55.6055 17.7096 57.2008 17.7096C57.8491 17.7096 58.3868 17.5722 58.8948 17.2763C58.9152 17.2644 58.9322 17.2474 58.944 17.2268C58.9558 17.2061 58.962 17.1827 58.962 17.1589V15.6402C58.962 15.6171 58.9561 15.5944 58.9451 15.5743C58.934 15.5541 58.9181 15.5371 58.8988 15.5249C58.8797 15.5128 58.8578 15.5059 58.8353 15.5048C58.8128 15.5038 58.7904 15.5086 58.7703 15.5188C58.4214 15.6994 58.0853 15.7817 57.7088 15.7817C57.1286 15.7817 56.8687 15.5108 56.8687 14.906V11.0701H58.8592C58.8768 11.07 58.8941 11.0664 58.9102 11.0594C58.9264 11.0525 58.941 11.0424 58.9533 11.0298C58.9656 11.0171 58.9753 11.0021 58.9819 10.9856C58.9885 10.9691 58.9918 10.9515 58.9917 10.9337V9.33879C58.9918 9.32106 58.9885 9.30347 58.9819 9.28705C58.9753 9.27062 58.9655 9.25569 58.9532 9.2431C58.9409 9.23051 58.9263 9.22052 58.9101 9.2137C58.894 9.20689 58.8767 9.20338 58.8592 9.20338V9.20438ZM65.7926 9.21241V8.95662C65.7926 8.20229 66.0743 7.86525 66.7069 7.86525C67.0834 7.86525 67.3869 7.94249 67.7259 8.05885C67.7458 8.06532 67.7669 8.06688 67.7876 8.06339C67.8082 8.0599 67.8277 8.05146 67.8445 8.03879C67.8617 8.02619 67.8757 8.0096 67.8853 7.99041C67.8949 7.97122 67.8999 7.94998 67.8998 7.92845V6.36563C67.9001 6.33654 67.891 6.30815 67.8741 6.28466C67.8572 6.26118 67.8333 6.24384 67.8059 6.23523C67.3194 6.08322 66.8126 6.00877 66.3036 6.01455C64.6333 6.01455 63.7497 6.97952 63.7497 8.80314V9.19635H62.8809C62.8457 9.19662 62.812 9.211 62.7872 9.23637C62.7624 9.26174 62.7485 9.29603 62.7485 9.33177V10.9347C62.7485 11.0099 62.8078 11.0711 62.8809 11.0711H63.7507V17.4348C63.7507 17.51 63.809 17.5702 63.8821 17.5702H65.6908C65.763 17.5702 65.8223 17.51 65.8223 17.4348V11.0701H67.5114L70.098 17.4317C69.8044 18.1008 69.5148 18.2342 69.1214 18.2342C68.8022 18.2342 68.4671 18.1359 68.1232 17.9433C68.1073 17.9346 68.0898 17.9292 68.0718 17.9275C68.0538 17.9257 68.0357 17.9277 68.0184 17.9333C68.0012 17.9395 67.9854 17.9491 67.9719 17.9617C67.9585 17.9743 67.9478 17.9896 67.9403 18.0065L67.3276 19.3858C67.3133 19.4168 67.3112 19.4522 67.3217 19.4848C67.3321 19.5174 67.3544 19.5447 67.3839 19.5613C67.9715 19.9033 68.6389 20.0787 69.3162 20.0689C70.6504 20.0689 71.3888 19.4309 72.0401 17.7136L75.1772 9.39697C75.1851 9.37633 75.1879 9.35406 75.1855 9.33206C75.1831 9.31005 75.1755 9.28896 75.1633 9.27058C75.1514 9.25244 75.1352 9.23756 75.1162 9.22724C75.0973 9.21693 75.0761 9.21149 75.0546 9.2114H73.1718C73.1441 9.21153 73.1172 9.22039 73.0947 9.23674C73.0722 9.25309 73.0553 9.27614 73.0462 9.30268L71.1179 14.9541L69.0058 9.29867C68.9965 9.27304 68.9797 9.25092 68.9576 9.23531C68.9355 9.21971 68.9092 9.21136 68.8823 9.2114H65.7926V9.21241ZM61.7729 9.20438H59.9642C59.929 9.20491 59.8954 9.21955 59.8708 9.2451C59.8462 9.27066 59.8325 9.30506 59.8328 9.3408V17.4348C59.8328 17.51 59.8921 17.5702 59.9652 17.5702H61.7739C61.8461 17.5702 61.9054 17.51 61.9054 17.4348V9.3398C61.9054 9.30406 61.8915 9.26976 61.8666 9.2444C61.8418 9.21903 61.8082 9.20464 61.7729 9.20438ZM60.8775 5.51902C60.5318 5.52114 60.2011 5.6624 59.958 5.91179C59.7148 6.16117 59.5792 6.49829 59.5807 6.84912C59.5798 7.023 59.6127 7.19536 59.6774 7.35636C59.7421 7.51736 59.8375 7.66384 59.958 7.78745C60.0785 7.91105 60.2218 8.00936 60.3797 8.07675C60.5377 8.14414 60.7071 8.1793 60.8785 8.18022C61.2243 8.1781 61.5552 8.0367 61.7983 7.7871C62.0415 7.53749 62.177 7.20012 62.1752 6.84912C62.1752 6.11385 61.5931 5.51902 60.8775 5.51902ZM76.7951 10.0099H76.464V10.4432H76.7951C76.9602 10.4432 77.059 10.3599 77.059 10.2265C77.059 10.0851 76.9602 10.0099 76.7951 10.0099ZM77.0096 10.6278L77.3704 11.1454H77.0659L76.7427 10.6709H76.464V11.1454H76.21V9.77414H76.805C77.1154 9.77414 77.3199 9.93764 77.3199 10.2115C77.3243 10.3067 77.2956 10.4005 77.2389 10.4765C77.1822 10.5526 77.1011 10.6061 77.0096 10.6278ZM76.7279 9.31873C76.0756 9.31873 75.5824 9.85037 75.5824 10.5014C75.5824 11.1514 76.0726 11.676 76.721 11.676C77.3733 11.676 77.8675 11.1444 77.8675 10.4934C77.8675 9.84335 77.3763 9.31873 76.7279 9.31873ZM76.721 11.8064C76.5529 11.806 76.3865 11.7719 76.2315 11.706C76.0764 11.6401 75.9357 11.5437 75.8175 11.4224C75.6993 11.3012 75.6058 11.1573 75.5426 10.9993C75.4794 10.8412 75.4475 10.672 75.449 10.5014C75.449 9.78517 76.0123 9.18833 76.7279 9.18833C76.896 9.18872 77.0624 9.22285 77.2174 9.28874C77.3725 9.35464 77.5132 9.451 77.6314 9.57229C77.7496 9.69358 77.8431 9.8374 77.9063 9.99547C77.9696 10.1535 78.0014 10.3228 77.9999 10.4934C77.9999 11.2096 77.4366 11.8074 76.721 11.8074V11.8064Z M19.0985 10.6382C15.2302 8.34115 8.85004 8.13001 5.15734 9.25061C4.56443 9.4307 3.93745 9.09586 3.75774 8.50285C3.57803 7.90967 3.91237 7.283 4.50579 7.10274C8.74454 5.81575 15.7911 6.06437 20.244 8.70775C20.7776 9.02438 20.9524 9.71333 20.6363 10.2458C20.3199 10.7793 19.6303 10.9549 19.0985 10.6382ZM17.6847 14.3488C14.4602 12.3664 9.54258 11.7923 5.72724 12.9502C5.23257 13.0996 4.71006 12.8208 4.55976 12.327C4.41084 11.8322 4.68965 11.3109 5.1838 11.1605C9.54206 9.83755 14.9602 10.4784 18.6638 12.7544C19.1038 13.0254 19.2424 13.6014 18.9717 14.0407C18.7003 14.481 18.1247 14.6191 17.6847 14.3488ZM16.475 17.5571C13.657 15.8349 10.1104 15.446 5.93306 16.4002C5.53058 16.4923 5.12966 16.2401 5.03782 15.8377C4.94546 15.4352 5.19677 15.0339 5.60011 14.9421C10.1715 13.8972 14.0923 14.3469 17.2554 16.2796C17.6079 16.4949 17.7191 16.9557 17.5034 17.3084C17.2879 17.6619 16.8275 17.7727 16.475 17.5571ZM0 11.9998C0 18.6277 5.37285 24 12 24C18.6277 24 24 18.6277 24 11.9998C24 5.37264 18.6277 0 12 0C5.37285 0 0 5.37264 0 11.9998Z" />
							</svg> */}
							<svg
								height={24}
								aria-hidden="false"
								aria-label="Spotify"
								className="fill-white"
								data-encore-id="logoSpotify"
								viewBox="0 0 78 24"
							>
								<title>{"Spotify"}</title>
								<path d="M31.823 11.078c-2.019-.494-2.379-.84-2.379-1.57 0-.688.633-1.151 1.572-1.151.91 0 1.814.352 2.76 1.076a.131.131 0 0 0 .187-.03l.987-1.426a.139.139 0 0 0-.025-.185c-1.127-.928-2.396-1.378-3.88-1.378-2.18 0-3.703 1.342-3.703 3.263 0 2.06 1.315 2.788 3.585 3.352 1.932.457 2.258.84 2.258 1.524 0 .757-.659 1.229-1.72 1.229-1.18 0-2.141-.408-3.216-1.364a.13.13 0 0 0-.188.016l-1.106 1.35a.137.137 0 0 0 .013.188c1.252 1.147 2.79 1.752 4.451 1.752 2.35 0 3.869-1.317 3.869-3.356 0-1.723-1.003-2.676-3.465-3.29Zm10.487 2.31c0 1.454-.874 2.47-2.125 2.47-1.235 0-2.169-1.061-2.169-2.47 0-1.41.933-2.47 2.17-2.47 1.23 0 2.124 1.038 2.124 2.47Zm-1.706-4.354c-1.018 0-1.854.412-2.543 1.256v-.95a.136.136 0 0 0-.038-.095.132.132 0 0 0-.093-.04h-1.81a.131.131 0 0 0-.093.04.136.136 0 0 0-.039.096v10.546c0 .076.06.137.133.137h1.809a.132.132 0 0 0 .093-.041.136.136 0 0 0 .038-.096v-3.329c.69.794 1.525 1.18 2.543 1.18 1.893 0 3.808-1.494 3.808-4.35 0-2.858-1.915-4.354-3.808-4.354Zm8.72 6.839c-1.297 0-2.274-1.068-2.274-2.486 0-1.422.943-2.455 2.244-2.455 1.305 0 2.288 1.069 2.288 2.487 0 1.422-.949 2.454-2.258 2.454Zm0-6.838c-2.438 0-4.347 1.926-4.347 4.383 0 2.432 1.896 4.338 4.317 4.338 2.445 0 4.36-1.92 4.36-4.369 0-2.44-1.901-4.353-4.33-4.353Zm9.535.17h-1.99V7.117a.136.136 0 0 0-.08-.126.13.13 0 0 0-.052-.01h-1.809a.133.133 0 0 0-.093.04.136.136 0 0 0-.038.095v2.087h-.87a.131.131 0 0 0-.122.085.139.139 0 0 0-.01.052v1.595c0 .074.06.135.132.135h.87v4.126c0 1.667.809 2.513 2.404 2.513.648 0 1.186-.138 1.694-.434a.135.135 0 0 0 .067-.117V15.64a.137.137 0 0 0-.063-.115.13.13 0 0 0-.129-.006c-.349.18-.685.263-1.061.263-.58 0-.84-.271-.84-.876V11.07h1.99a.13.13 0 0 0 .094-.04.136.136 0 0 0 .039-.096V9.339a.137.137 0 0 0-.039-.096.132.132 0 0 0-.094-.04v.001Zm6.934.007v-.255c0-.755.281-1.092.914-1.092.376 0 .68.077 1.019.194a.13.13 0 0 0 .118-.02.135.135 0 0 0 .056-.11V6.365a.136.136 0 0 0-.094-.13 4.852 4.852 0 0 0-1.502-.221c-1.67 0-2.554.965-2.554 2.788v.393h-.87a.132.132 0 0 0-.093.04.136.136 0 0 0-.038.096v1.603c0 .075.059.136.132.136h.87v6.364c0 .075.058.135.131.135h1.809c.072 0 .131-.06.131-.135V11.07h1.69l2.586 6.362c-.294.669-.583.802-.977.802-.319 0-.654-.098-.998-.29a.133.133 0 0 0-.105-.01.135.135 0 0 0-.078.072l-.612 1.38a.137.137 0 0 0 .056.175 3.733 3.733 0 0 0 1.932.508c1.334 0 2.073-.638 2.724-2.355l3.137-8.317a.14.14 0 0 0-.014-.126.131.131 0 0 0-.108-.06h-1.883a.132.132 0 0 0-.126.092l-1.928 5.651L69.006 9.3a.133.133 0 0 0-.124-.088h-3.09v.001Zm-4.02-.008h-1.809a.132.132 0 0 0-.093.041.136.136 0 0 0-.038.096v8.094c0 .075.06.135.132.135h1.809c.072 0 .131-.06.131-.135V9.34a.136.136 0 0 0-.038-.096.132.132 0 0 0-.094-.04Zm-.896-3.685a1.295 1.295 0 0 0-.919.393c-.243.25-.379.586-.377.937a1.342 1.342 0 0 0 .377.938 1.304 1.304 0 0 0 .92.393c.346-.002.677-.143.92-.393s.379-.587.377-.938c0-.735-.582-1.33-1.297-1.33Zm15.918 4.49h-.331v.434h.331c.165 0 .264-.083.264-.216 0-.142-.099-.217-.264-.217Zm.215.619.36.517h-.304l-.323-.474h-.279v.474h-.254v-1.37h.595c.31 0 .515.163.515.436a.412.412 0 0 1-.31.417Zm-.282-1.31c-.652 0-1.146.532-1.146 1.183 0 .65.49 1.175 1.139 1.175.652 0 1.147-.532 1.147-1.183 0-.65-.492-1.174-1.14-1.174Zm-.007 2.488a1.259 1.259 0 0 1-.904-.384 1.295 1.295 0 0 1-.368-.92c0-.717.563-1.314 1.279-1.314a1.259 1.259 0 0 1 .903.384 1.295 1.295 0 0 1 .369.921c0 .717-.563 1.314-1.279 1.314Zm-57.623-1.168C15.23 8.341 8.85 8.13 5.159 9.251a1.122 1.122 0 1 1-.652-2.148C8.745 5.816 15.79 6.064 20.244 8.708a1.122 1.122 0 0 1-1.145 1.93Zm-1.413 3.71c-3.225-1.982-8.142-2.556-11.958-1.398a.937.937 0 0 1-1.167-.623.936.936 0 0 1 .624-1.166c4.358-1.323 9.776-.683 13.48 1.593a.935.935 0 1 1-.98 1.595Zm-1.21 3.21c-2.818-1.723-6.365-2.112-10.542-1.158a.748.748 0 0 1-.333-1.458c4.572-1.045 8.492-.595 11.655 1.338a.748.748 0 0 1-.78 1.277ZM0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12Z" />
							</svg>
						</Link>
					</li>
				)}
				{navigationRoutes.map((item) => {
					if (isOpen) {
						return (
							<li key={item.label} className="py-1 px-3">
								<Link
									href={item.route}
									className={cn(
										"flex items-center gap-5 h-10 font-bold text-subduedText hover:text-baseText transition-colors",
										{
											"text-bold": pathname === item.route,
										}
									)}
								>
									{pathname === item.route ? item.activeIcon : item.icon}
									<span>{item.label}</span>
								</Link>
							</li>
						);
					} else {
						return (
							<ActionTooltip key={item.label} side="right" label={item.label}>
								<li key={item.label} className="py-1 px-3">
									<Link
										href={item.route}
										className="flex items-center gap-5 h-10 font-bold text-subduedText hover:text-baseText transition-colors"
									>
										{pathname === item.route ? item.activeIcon : item.icon}
									</Link>
								</li>
							</ActionTooltip>
						);
					}
				})}
			</ul>
		</nav>
	);
};
