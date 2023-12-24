import React, {useEffect, useMemo, useState} from 'react';
import PostList from "../components/PostList";
import ModalShare from "../components/ModalShare";
import {fetchPost} from "../asyncActions/posts";
import {useDispatch, useSelector} from "react-redux";
import {addManyPost, clearArray, setCurrentPage} from "../store/postReducer";
import Pagination from "../components/Pagination";
import ListCarusel from "../components/ListCarusel/ListCarusel";
import CaruselItem from "../components/UI/caruselItem/CaruselItem";
import Menu from "../components/UI/menu/Menu";
import RightMenu from "../components/UI/menu/RightMenu";

function Posts() {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.post.currentPage);
    // const [posts, setPosts] = useState([
    //     {id: 1, title: 'First', body:'Is a good post'},
    //     {id: 2, title: 'Second', body:'Is a good post'},
    //     {id: 3, title: 'Third', body:'Is a good post'}
    // ])
    //const [searchQuery, setSearchQuery] = useState('')
    // const searchResult = useMemo(() =>{
    //     return posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
    // },[posts,searchQuery])
    const handlePageChange = (newPage) => {
        dispatch(setCurrentPage(newPage));
        dispatch(fetchPost(newPage));
    };
    const items = [
        <CaruselItem>
            <svg style={{marginRight: "15px"}} width="25" height="25" viewBox="0 0 25 25" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.5 1.5625C14.2259 1.5625 15.625 2.96161 15.625 4.6875V7.8125H9.37502V4.6875C9.37502 2.96161 10.7741 1.5625 12.5 1.5625ZM17.1875 7.8125V4.6875C17.1875 2.09867 15.0889 0 12.5 0C9.91119 0 7.81252 2.09867 7.81252 4.6875V7.8125H5.25188C4.09173 7.8125 3.10615 8.66127 2.93406 9.80858L1.3282 20.5143C0.973938 22.876 2.80307 25 5.19123 25H19.8088C22.197 25 24.0261 22.876 23.6718 20.5143L22.066 9.80858C21.8939 8.66126 20.9083 7.8125 19.7482 7.8125H17.1875ZM15.625 9.375V11.7188C15.625 12.1502 15.9748 12.5 16.4063 12.5C16.8377 12.5 17.1875 12.1502 17.1875 11.7188V9.375H19.7482C20.1349 9.375 20.4634 9.65792 20.5208 10.0404L22.1266 20.7461C22.3392 22.1631 21.2417 23.4375 19.8088 23.4375H5.19123C3.75834 23.4375 2.66086 22.1631 2.87341 20.7461L4.47927 10.0404C4.53663 9.65792 4.86516 9.375 5.25188 9.375H7.81252V11.7188C7.81252 12.1502 8.1623 12.5 8.59377 12.5C9.02524 12.5 9.37502 12.1502 9.37502 11.7188V9.375H15.625Z"
                    fill="black"/>
            </svg>
            Style</CaruselItem>,
        <CaruselItem>
            <svg style={{marginRight: "15px"}} width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.54294 3.49751C7.97825 3.39244 8.68376 3.25734 9.11908 3.1973C9.55439 3.13725 10.3049 3.09222 11.6709 3.07721L11.9261 3.32489C12.0687 3.45999 12.2038 3.67764 12.2338 3.82775C12.2714 4.01539 12.2488 4.173 12.1513 4.38315C12.0462 4.5933 11.9186 4.7209 11.7084 4.81847C11.4983 4.90853 11.2206 4.95356 10.7703 4.95356C10.4175 4.95356 9.79456 5.0061 9.38177 5.06614C8.96897 5.12619 8.39105 5.22376 8.10585 5.29131C7.82064 5.35886 7.22771 5.53148 6.7924 5.66658C6.35708 5.80918 5.53149 6.16193 4.95357 6.44714C4.37566 6.73235 3.61761 7.16766 3.26485 7.41534C2.9121 7.66302 2.32668 8.12085 1.95141 8.43608C1.55362 8.77382 1.18586 9.029 1.05076 9.05152C0.923166 9.07404 0.705509 9.04401 0.547895 8.97646C0.390281 8.90892 0.202646 8.76631 0.135097 8.65373C0.0525379 8.53365 0 8.30848 0 8.09083C0 7.7831 0.0375271 7.70054 0.300217 7.42284C0.465336 7.25022 0.870628 6.88996 1.20087 6.62727C1.5311 6.35708 2.13904 5.91426 2.55184 5.64406C2.96464 5.37387 3.7377 4.93855 4.27809 4.68337C4.81848 4.42068 5.59153 4.09795 6.00433 3.95534C6.41713 3.81274 7.10763 3.61009 7.54294 3.49751Z"
                    fill="#3A3A3A"/>
                <path
                    d="M8.85639 7.05508C9.26919 6.98002 9.7045 6.89747 9.83209 6.88245C9.95968 6.86744 10.4175 6.84493 11.6709 6.82992L11.9336 7.09261C12.1663 7.32527 12.1963 7.40033 12.1963 7.73057C12.1963 8.03078 12.1588 8.15087 11.9937 8.3385C11.8736 8.45859 11.6859 8.59369 11.5583 8.63122C11.4307 8.66124 10.9804 8.71378 10.5451 8.73629C10.1098 8.7513 9.50185 8.82636 9.19413 8.89391C8.88641 8.96145 8.34602 9.11156 7.99327 9.22414C7.64051 9.34423 7.10012 9.56189 6.7924 9.70449C6.48468 9.84709 5.92177 10.1698 5.55401 10.4175C5.18624 10.6652 4.66086 11.0555 4.39067 11.2881C4.12047 11.5208 3.80524 11.731 3.67765 11.7535C3.55006 11.7835 3.35492 11.776 3.22733 11.746C3.09974 11.7159 2.91961 11.6034 2.81453 11.4908C2.70945 11.3782 2.60438 11.1906 2.57436 11.063C2.55184 10.9429 2.54433 10.7477 2.57436 10.6202C2.59687 10.5001 2.76199 10.2524 2.94212 10.0798C3.12225 9.89963 3.58008 9.52436 3.95535 9.24666C4.33813 8.96145 4.89353 8.59369 5.17874 8.42857C5.46394 8.26345 5.97431 8.00827 6.30455 7.85816C6.63479 7.71556 7.17518 7.51291 7.50541 7.40033C7.83565 7.29525 8.44359 7.13764 8.85639 7.05508Z"
                    fill="#3A3A3A"/>
                <path
                    d="M8.93144 10.8453C9.29921 10.7402 9.82459 10.6277 10.0948 10.5901C10.365 10.5526 10.7778 10.5226 11.0179 10.5151C11.2881 10.5076 11.5433 10.5526 11.716 10.6427C11.8661 10.7102 12.0387 10.8603 12.0912 10.9804C12.1513 11.093 12.1963 11.3031 12.1963 11.4457C12.1963 11.5883 12.1513 11.7985 12.0912 11.9186C12.0387 12.0312 11.8811 12.1738 11.7385 12.2413C11.5959 12.3089 11.1981 12.3839 10.8453 12.4139C10.4926 12.4365 9.93717 12.5265 9.60693 12.6091C9.27669 12.6916 8.76632 12.8718 8.48112 13.0069C8.19591 13.142 7.79062 13.3671 7.58047 13.5097C7.37782 13.6448 7.05509 13.8925 6.86745 14.0501C6.67982 14.2152 6.43214 14.3729 6.30455 14.4029C6.17696 14.4329 5.9593 14.4329 5.8167 14.4029C5.65908 14.3654 5.47145 14.2453 5.34385 14.0952C5.20125 13.9225 5.14121 13.7649 5.14121 13.5698C5.14121 13.4122 5.18624 13.1945 5.24628 13.0819C5.29882 12.9618 5.50897 12.7367 5.71162 12.5641C5.91427 12.3989 6.29704 12.1137 6.56724 11.9336C6.83743 11.7535 7.32528 11.4758 7.65552 11.3257C7.98576 11.168 8.56368 10.9579 8.93144 10.8453Z"
                    fill="#3A3A3A"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M16.3243 0.142603C16.0991 0.210152 15.7764 0.36026 15.6112 0.465336C15.4461 0.562906 15.1684 0.81809 14.9883 1.02074C14.8157 1.22338 14.598 1.57614 14.5004 1.8013L14.3353 2.2141L14.2978 15.236C13.6899 14.8457 13.2921 14.6431 13.0219 14.538C12.7517 14.4329 12.2488 14.3053 11.8961 14.2603C11.4082 14.1927 11.1155 14.1927 10.6577 14.2603C10.3274 14.3053 9.80205 14.4479 9.49433 14.5755C9.18661 14.6956 8.72878 14.9433 8.4811 15.1159C8.23342 15.296 7.85815 15.6263 7.65551 15.8439C7.45286 16.0691 7.13763 16.5269 6.97251 16.8497C6.79989 17.1799 6.60475 17.6677 6.5372 17.9379C6.46965 18.2081 6.41711 18.7335 6.41711 19.1013C6.41711 19.469 6.46965 19.9944 6.5372 20.2646C6.59724 20.5348 6.76236 20.9851 6.90497 21.2778C7.04006 21.5706 7.30275 21.9683 7.47538 22.1785C7.65551 22.3811 7.97073 22.6964 8.17338 22.8765C8.38353 23.0566 8.82635 23.3343 9.15659 23.4995C9.48683 23.6646 10.0122 23.8447 10.3199 23.9123C10.7177 23.9948 11.0855 24.0173 11.5583 23.9873C11.9261 23.9648 12.4214 23.8897 12.6466 23.8222C12.8718 23.7546 13.2996 23.582 13.5848 23.4319C13.9525 23.2443 14.2978 22.9741 14.7481 22.5237C15.1909 22.0734 15.4611 21.7282 15.6263 21.3904C15.7614 21.1202 15.934 20.6474 16.0165 20.3397C16.1741 19.7843 16.1741 19.6192 16.1741 11.2206C16.1741 2.96464 16.1817 2.65692 16.3168 2.40173C16.3918 2.25913 16.5719 2.079 16.707 2.00395C16.8496 1.9364 17.0448 1.87635 17.1499 1.87635C17.2549 1.87635 17.5401 1.97392 17.7878 2.09401C18.0355 2.2141 18.4408 2.36421 18.6885 2.43175C18.9361 2.4918 19.4615 2.58186 19.8518 2.6344C20.2421 2.67943 20.7825 2.69444 21.0527 2.66442C21.3229 2.64191 21.6081 2.59687 21.6906 2.57436C21.7732 2.55184 21.9008 2.58937 21.9758 2.65692C22.0884 2.76199 22.1034 2.91961 22.0884 4.10546L22.0659 5.44143C21.7131 5.60654 21.3154 5.67409 20.9401 5.6891C20.3321 5.71913 20.1971 5.69661 19.5516 5.47895C19.0562 5.31383 18.7635 5.25379 18.5909 5.28381C18.4483 5.31383 18.2607 5.43392 18.1256 5.59153C17.9454 5.80169 17.9004 5.92177 17.9004 6.19197C17.9004 6.45466 17.9454 6.58225 18.1105 6.76238C18.2231 6.88997 18.4633 7.06259 18.6509 7.14515C18.8386 7.22021 19.2213 7.35531 19.5141 7.43787C19.8518 7.52793 20.2721 7.58047 20.6999 7.58047C21.0602 7.58047 21.6006 7.53544 21.9008 7.47539C22.1935 7.42285 22.5838 7.30277 22.7639 7.2127C22.9365 7.13014 23.2067 6.9275 23.3568 6.76988C23.5069 6.61978 23.7021 6.34208 23.7846 6.15444C23.9272 5.84672 23.9423 5.67409 23.9423 4.05292C23.9423 2.37171 23.9347 2.27414 23.7696 1.96642C23.6796 1.79379 23.4919 1.5311 23.3568 1.381C23.2292 1.23089 22.929 1.02074 22.7039 0.915661C22.3361 0.735531 22.2235 0.72052 21.6531 0.743036C21.3003 0.765552 20.7449 0.773058 20.4147 0.773058C20.0845 0.765552 19.5816 0.705509 19.2889 0.63796C18.9962 0.570412 18.6584 0.45783 18.5384 0.375271C18.4183 0.300217 18.1256 0.187635 17.9004 0.120087C17.6752 0.0525379 17.315 0 17.1123 0C16.9022 0.00750541 16.5494 0.0675487 16.3243 0.142603ZM11.153 16.4669C10.9804 16.677 10.7778 16.9622 10.6952 17.0973C10.6126 17.2249 10.4625 17.5927 10.3574 17.9004C10.2148 18.3207 10.1698 18.6209 10.1698 19.0863C10.1698 19.424 10.2224 19.9044 10.2899 20.152C10.3499 20.3997 10.4925 20.7675 10.6051 20.9701C10.7177 21.1728 10.9654 21.5255 11.168 21.7432C11.4983 22.1185 11.5358 22.141 11.806 22.0959C11.9561 22.0734 12.2863 21.9608 12.534 21.8483C12.7817 21.7357 13.1345 21.5105 13.3071 21.3454C13.4872 21.1878 13.7274 20.9026 13.8475 20.7149C13.96 20.5273 14.1177 20.1896 14.1852 19.9644C14.2828 19.6642 14.3128 19.394 14.2828 18.9512C14.2603 18.4858 14.2002 18.2382 14.0276 17.8629C13.9 17.5852 13.6373 17.2099 13.4272 16.9998C13.2245 16.7896 12.8718 16.5344 12.6466 16.4218C12.4214 16.3168 12.0612 16.1967 11.851 16.1592L11.4607 16.0916L11.153 16.4669Z"
                      fill="#3A3A3A"/>
            </svg>
            Music</CaruselItem>,
        <CaruselItem>
            <svg style={{marginRight: "15px"}} width="28" height="19" viewBox="0 0 28 19" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M6.62721 0.0682899C6.33115 0.119898 5.80581 0.261534 5.45158 0.393106C5.10556 0.515231 4.55599 0.779837 4.23033 0.973202C3.89448 1.16657 3.35509 1.58383 3.01925 1.88914C2.6834 2.19446 2.20508 2.74402 1.97101 3.1104C1.73693 3.47677 1.42144 4.06705 1.27896 4.43342C1.14666 4.7998 0.973648 5.32901 0.912585 5.60379C0.851522 5.88875 0.637803 7.5578 0.434261 9.31844C0.240895 11.0791 0.04753 12.8703 0.0169987 13.2875C-0.0237098 13.8269 0.00682153 14.2442 0.128947 14.7123C0.230718 15.0787 0.434261 15.6079 0.597094 15.8827C0.759928 16.1676 1.10595 16.6053 1.38073 16.8597C1.64534 17.1243 2.05242 17.45 2.27632 17.5823C2.50022 17.7247 2.9073 17.9079 3.19226 17.9995C3.46704 18.0809 3.92501 18.1929 4.20997 18.2234C4.48475 18.2641 5.01396 18.2336 5.38034 18.1725C5.74672 18.1013 6.26575 17.9486 6.55071 17.8163C6.82549 17.6942 7.28346 17.4092 7.56842 17.1854C7.8432 16.9716 8.26047 16.5137 8.47418 16.1778C8.69808 15.8521 8.96269 15.3229 9.06446 15.0176C9.17641 14.7123 9.30871 14.3968 9.37995 14.3256C9.47154 14.2238 10.3671 14.1933 13.5933 14.2035C17.1044 14.2035 17.715 14.2238 17.8473 14.3561C17.9287 14.4375 18.0305 14.6614 18.061 14.8446C18.0916 15.0176 18.2646 15.4349 18.4478 15.7707C18.6208 16.0964 19.0177 16.6053 19.323 16.9004C19.6283 17.1955 20.1779 17.5823 20.5442 17.7553C20.9106 17.9283 21.5009 18.1216 21.8673 18.1827C22.3354 18.2539 22.7425 18.2539 23.2412 18.1827C23.6686 18.1216 24.2385 17.9385 24.666 17.7247C25.1138 17.5008 25.5616 17.1752 25.8974 16.8292C26.1824 16.534 26.5284 16.0862 26.681 15.8318C26.8235 15.5774 27.0169 15.099 27.1085 14.7632C27.1899 14.4274 27.2611 13.8981 27.2611 13.5928C27.2611 13.2875 27.0576 11.3437 26.8134 9.26755C26.4572 6.25513 26.3147 5.34936 26.101 4.73874C25.9585 4.32147 25.6837 3.72102 25.5005 3.41571C25.3275 3.1104 24.8288 2.50995 24.4116 2.08251C23.9332 1.60418 23.3837 1.16657 22.9359 0.922316C22.539 0.69842 21.8775 0.403283 21.4602 0.270981C20.9548 0.0957964 20.4211 0.00581475 19.8862 0.00487874C10.0776 -0.012287 6.93716 0.01762 6.62594 0.0667809C6.62541 0.0668641 6.6265 0.0674383 6.62704 0.0674383C6.62757 0.0674383 6.62774 0.0681984 6.62721 0.0682899ZM6.80515 2.10285C6.55072 2.15374 6.01133 2.34711 5.60425 2.55065C5.15645 2.76437 4.66795 3.11039 4.34228 3.44623C4.04715 3.74137 3.67059 4.20952 3.50776 4.4843C3.34493 4.76926 3.15156 5.17634 3.07014 5.40024C2.98873 5.62414 2.83607 6.49937 2.7343 7.33389C2.72631 7.40024 2.71762 7.47224 2.70834 7.54923C2.59939 8.45241 2.40762 10.0424 2.27633 11.2521C2.12367 12.5649 2.03208 13.8269 2.06261 14.0508C2.09314 14.2747 2.25598 14.6716 2.42899 14.9464C2.59182 15.211 2.92767 15.5672 3.17192 15.73C3.40599 15.903 3.83343 16.0862 4.10821 16.1473C4.39317 16.1982 4.80025 16.2185 5.02415 16.1778C5.24805 16.1473 5.65513 15.9946 5.92991 15.842C6.19452 15.6995 6.55072 15.3942 6.72373 15.1703C6.88656 14.9464 7.07993 14.5393 7.16135 14.2543C7.24276 13.9796 7.44631 13.5318 7.61932 13.2672C7.81268 12.9618 8.10782 12.6769 8.41313 12.5039L8.89146 12.2189C18.1323 12.2189 18.2646 12.2291 18.6615 12.4326C18.8854 12.5548 19.2212 12.8295 19.4044 13.0433C19.5876 13.257 19.8217 13.7149 19.9336 14.0508C20.0456 14.3866 20.2389 14.8243 20.3611 15.0074C20.4934 15.2008 20.7783 15.5061 21.0022 15.6791C21.2668 15.8827 21.6332 16.0455 22.0199 16.1269C22.4881 16.2185 22.7527 16.2287 23.1394 16.1371C23.4244 16.076 23.8315 15.903 24.0554 15.7504C24.2793 15.5977 24.6151 15.2415 24.7983 14.9667C24.9815 14.6818 25.1545 14.2543 25.1952 13.9999C25.2359 13.7048 25.1036 12.168 24.8186 9.7764C24.4828 6.86575 24.3301 5.85821 24.147 5.34935C24.0147 4.98298 23.7297 4.44359 23.5262 4.13828C23.3124 3.83296 22.9562 3.43606 22.7323 3.24269C22.5084 3.04933 22.0098 2.73384 21.6129 2.54047C21.2159 2.34711 20.646 2.14356 20.3407 2.09268C19.9947 2.03161 17.3486 1.99091 13.522 2.00108C10.0822 2.01126 7.05958 2.05197 6.80515 2.10285Z"
                      fill="#3A3A3A"/>
                <path
                    d="M7.68031 4.54537C7.77191 4.41307 7.94492 4.24006 8.05687 4.16882C8.17899 4.09758 8.38253 4.03651 8.50466 4.02634C8.63696 4.02634 8.86086 4.0874 9.01352 4.16882C9.17635 4.24006 9.35954 4.42324 9.4206 4.5759C9.49184 4.71838 9.5529 5.11529 9.5529 6.06176H10.1635C10.4994 6.06176 10.8963 6.12282 11.0388 6.18389C11.1914 6.25513 11.3746 6.43831 11.4458 6.59097C11.5273 6.7538 11.5883 6.96752 11.5883 7.07947C11.5883 7.19142 11.5273 7.40514 11.4458 7.5578C11.3746 7.72063 11.1914 7.90382 11.0388 7.96488C10.8963 8.03612 10.4994 8.09718 9.5529 8.09718V8.70781C9.5529 9.04366 9.49184 9.44056 9.41042 9.59322C9.33918 9.75605 9.156 9.93924 9.00334 10.0003C8.86086 10.0715 8.64714 10.1326 8.53519 10.1326C8.42324 10.1326 8.20952 10.0715 8.06704 10.0003C7.91439 9.93924 7.7312 9.75605 7.65996 9.59322C7.57854 9.44056 7.51748 9.04366 7.51748 8.09718H6.90685C6.57101 8.09718 6.1741 8.03612 6.03162 7.96488C5.87896 7.90382 5.69578 7.72063 5.62454 7.5578C5.54312 7.40514 5.48206 7.19142 5.48206 7.07947C5.48206 6.96752 5.54312 6.7538 5.62454 6.59097C5.69578 6.43831 5.87896 6.25513 6.03162 6.18389C6.1741 6.12282 6.57101 6.06176 7.51748 6.06176V5.4206C7.52766 5.02369 7.58872 4.69803 7.68031 4.54537Z"
                    fill="#3A3A3A"/>
                <path
                    d="M17.8574 4.54537C17.949 4.41307 18.122 4.24006 18.234 4.16882C18.3561 4.09758 18.5597 4.03651 18.6818 4.02634C18.8141 4.02634 19.038 4.0874 19.1906 4.16882C19.3535 4.24006 19.5367 4.42324 19.5977 4.5759C19.669 4.71838 19.73 4.9321 19.73 5.04405C19.73 5.156 19.669 5.36972 19.5875 5.52237C19.5163 5.68521 19.3331 5.8684 19.1805 5.92946C19.038 6.0007 18.8243 6.06176 18.7123 6.06176C18.6004 6.06176 18.3866 6.0007 18.2442 5.92946C18.0915 5.8684 17.9083 5.68521 17.8371 5.52237C17.7557 5.36972 17.6946 5.14582 17.6946 5.01352C17.7048 4.89139 17.776 4.67767 17.8574 4.54537Z"
                    fill="#3A3A3A"/>
                <path
                    d="M15.822 6.58079C15.9136 6.44849 16.0866 6.27548 16.1986 6.20424C16.3207 6.133 16.5242 6.07194 16.6464 6.06176C16.7787 6.06176 17.0026 6.12282 17.1552 6.20424C17.318 6.27548 17.5012 6.45867 17.5623 6.61132C17.6335 6.7538 17.6946 6.96752 17.6946 7.07947C17.6946 7.19142 17.6335 7.40514 17.5521 7.5578C17.4809 7.72063 17.2977 7.90382 17.145 7.96488C17.0026 8.03612 16.7888 8.09718 16.6769 8.09718C16.5649 8.09718 16.3512 8.03612 16.2087 7.96488C16.0561 7.90382 15.8729 7.72063 15.8017 7.5578C15.7202 7.40514 15.6592 7.18124 15.6592 7.04894C15.6694 6.92682 15.7406 6.7131 15.822 6.58079Z"
                    fill="#3A3A3A"/>
                <path
                    d="M19.8929 6.58079C19.9845 6.44849 20.1575 6.27548 20.2694 6.20424C20.3915 6.133 20.5951 6.07194 20.7172 6.06176C20.8495 6.06176 21.0734 6.12282 21.2261 6.20424C21.3889 6.27548 21.5721 6.45867 21.6331 6.61132C21.7044 6.7538 21.7654 6.96752 21.7654 7.07947C21.7654 7.19142 21.7044 7.40514 21.623 7.5578C21.5517 7.72063 21.3685 7.90382 21.2159 7.96488C21.0734 8.03612 20.8597 8.09718 20.7477 8.09718C20.6358 8.09718 20.4221 8.03612 20.2796 7.96488C20.1269 7.90382 19.9437 7.72063 19.8725 7.5578C19.7911 7.40514 19.73 7.18124 19.73 7.04894C19.7402 6.92682 19.8114 6.7131 19.8929 6.58079Z"
                    fill="#3A3A3A"/>
                <path
                    d="M17.8574 8.61622C17.949 8.48391 18.122 8.3109 18.234 8.23966C18.3561 8.16842 18.5597 8.10736 18.6818 8.09718C18.8141 8.09718 19.038 8.15825 19.1906 8.23966C19.3535 8.3109 19.5367 8.49409 19.5977 8.64675C19.669 8.78923 19.73 9.00295 19.73 9.1149C19.73 9.22684 19.669 9.44056 19.5875 9.59322C19.5163 9.75605 19.3331 9.93924 19.1805 10.0003C19.038 10.0715 18.8243 10.1326 18.7123 10.1326C18.6004 10.1326 18.3866 10.0715 18.2442 10.0003C18.0915 9.93924 17.9083 9.75605 17.8371 9.59322C17.7557 9.44056 17.6946 9.21667 17.6946 9.08436C17.7048 8.96224 17.776 8.74852 17.8574 8.61622Z"
                    fill="#3A3A3A"/>
            </svg>
            Games</CaruselItem>,
        <CaruselItem>
            <svg style={{marginRight: "15px"}} width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M10.6402 0.0407063C10.3317 0.0783308 9.83505 0.161105 9.5491 0.221304C9.26316 0.281503 8.68374 0.439526 8.26987 0.56745C7.856 0.702898 7.17876 0.973794 6.76489 1.16944C6.35102 1.37261 5.71893 1.73381 5.35773 1.97461C4.99654 2.2154 4.42464 2.65937 4.0785 2.95284C3.73235 3.25384 3.21313 3.77306 2.92719 4.11168C2.63372 4.44277 2.2048 5.00714 1.964 5.36834C1.7232 5.72953 1.36201 6.36163 1.15884 6.7755C0.963188 7.18936 0.677241 7.91928 0.526743 8.39335C0.38377 8.86742 0.203172 9.56723 0.127923 9.93596C0.0376245 10.4251 0 10.997 0 12.0053C0 13.0136 0.0376245 13.5855 0.127923 14.0747C0.203172 14.4434 0.38377 15.1432 0.526743 15.6173C0.677241 16.0913 0.963188 16.8212 1.15884 17.2351C1.36201 17.649 1.7232 18.2811 1.964 18.6423C2.2048 19.0035 2.63372 19.5678 2.92719 19.8989C3.21313 20.2375 3.73235 20.7568 4.0785 21.0578C4.42464 21.3512 4.99654 21.7952 5.35773 22.036C5.71893 22.2768 6.35102 22.638 6.76489 22.8412C7.17876 23.0368 7.90867 23.3228 8.38274 23.4733C8.85681 23.6162 9.55663 23.7968 9.92535 23.8721C10.4145 23.9624 10.9864 24 11.9947 24C13.003 24 13.5749 23.9624 14.064 23.8721C14.4328 23.7968 15.1326 23.6162 15.6067 23.4733C16.0807 23.3228 16.8106 23.0368 17.2245 22.8412C17.6384 22.638 18.2705 22.2768 18.6317 22.036C18.9929 21.7952 19.5648 21.3512 19.9109 21.0578C20.257 20.7568 20.7687 20.2375 21.0622 19.8989C21.3557 19.5678 21.7846 19.0035 22.0254 18.6423C22.2662 18.2811 22.6274 17.649 22.8306 17.2351C23.0262 16.8212 23.3122 16.0913 23.4627 15.6173C23.6056 15.1432 23.7862 14.4434 23.8615 14.0747C23.9518 13.5855 23.9894 13.0136 23.9894 12.0053C23.9894 10.997 23.9518 10.4251 23.8615 9.93596C23.7862 9.56723 23.6056 8.86742 23.4627 8.39335C23.3122 7.91928 23.0262 7.18936 22.8306 6.7755C22.6274 6.36163 22.2662 5.72953 22.0254 5.36834C21.7846 5.00714 21.3557 4.44277 21.0622 4.11168C20.7687 3.77306 20.257 3.25384 19.9109 2.95284C19.5648 2.65937 18.9929 2.2154 18.6317 1.97461C18.2705 1.73381 17.6384 1.37261 17.2245 1.16944C16.8106 0.973794 16.1334 0.702898 15.7195 0.56745C15.3057 0.439526 14.6435 0.266453 14.2522 0.183679C13.8157 0.100905 13.0783 0.0256565 12.3709 0.0106067C11.7313 -0.0119681 10.9487 0.00308175 10.6402 0.0407063ZM11.5959 2.3057C11.5582 2.73462 11.483 3.32909 11.4228 3.61503C11.3626 3.90851 11.2422 4.38257 11.1594 4.66852C11.0766 4.96199 10.8058 5.60161 10.565 6.09825C10.3242 6.5949 9.92534 7.26461 9.68454 7.58818L9.2481 8.18265C11.2873 10.2144 11.9194 10.8013 11.9571 10.8013C12.0022 10.8013 13.5448 9.28881 15.4035 7.43769L18.7746 4.06653C17.977 3.45701 17.4803 3.13344 17.1492 2.93779C16.8182 2.74967 16.2086 2.46372 15.7948 2.3057C15.3809 2.14015 14.8241 1.95956 14.5532 1.89183C14.2823 1.83163 13.8609 1.74133 13.6125 1.70371C13.3642 1.65856 12.8224 1.60589 12.4086 1.57579L11.6561 1.52311L11.5959 2.3057ZM9.36097 1.89936C9.13522 1.95956 8.60848 2.14015 8.19461 2.3057C7.78074 2.46372 7.17122 2.74967 6.84013 2.94532C6.50903 3.13344 6.01239 3.46454 5.72644 3.67523C5.44802 3.89346 5.22227 4.08158 5.22227 4.10415C5.22227 4.12673 5.87694 4.79644 6.67458 5.59408L8.11936 7.04639C8.83423 5.9628 9.12017 5.48121 9.21047 5.27051C9.30077 5.06734 9.45127 4.67605 9.54909 4.40515C9.63939 4.13425 9.77484 3.64513 9.83504 3.31404C9.90276 2.98294 9.96296 2.50135 9.97801 2.2455C10.0081 1.85421 9.99306 1.77143 9.89524 1.77896C9.82752 1.78648 9.58672 1.83916 9.36097 1.89936ZM2.9347 6.85074C3.12283 6.51965 3.45392 6.023 3.66462 5.73706L4.05591 5.23289L5.50822 6.67767C6.30586 7.47531 6.953 8.16008 6.953 8.19018C6.953 8.22028 6.72725 8.41592 6.44883 8.6191C6.17041 8.82979 5.63614 9.14584 5.2599 9.32644C4.89118 9.50703 4.36444 9.72526 4.09354 9.81556C3.82264 9.89833 3.33352 10.0263 3.00243 10.0865C2.67133 10.1467 2.25746 10.1993 2.08439 10.1993C1.81349 10.1993 1.76082 10.1768 1.76082 10.0488C1.76082 9.96605 1.81349 9.68763 1.88122 9.43178C1.94894 9.16841 2.13706 8.6191 2.29509 8.20523C2.45311 7.79136 2.73906 7.18184 2.9347 6.85074ZM16.472 8.61157L13.0858 11.9978L15.1175 14.0446C15.9904 13.42 16.5548 13.0814 16.9235 12.8857C17.2997 12.6976 17.8415 12.4493 18.1275 12.3364C18.421 12.2235 19.0079 12.0505 19.4443 11.9526C19.9786 11.8247 20.5957 11.7495 21.3406 11.7118L22.4468 11.6592C22.3866 11.0797 22.3339 10.6734 22.2888 10.3799C22.2511 10.094 22.1608 9.65001 22.1006 9.40168C22.0404 9.15336 21.8598 8.61157 21.6943 8.1977C21.5363 7.78383 21.2503 7.17431 21.0622 6.84322C20.8741 6.51212 20.543 6.01548 20.3248 5.73706C20.1065 5.45864 19.9184 5.22536 19.8958 5.22536C19.8733 5.22536 18.3307 6.75292 16.472 8.61157ZM7.1035 10.1166C7.32925 9.96605 7.65282 9.71773 7.81837 9.56723L8.11936 9.30386L10.8283 11.9978L7.47975 15.3464C5.63614 17.19 4.10106 18.6949 4.05591 18.6949C4.01829 18.6949 3.82264 18.4842 3.62699 18.2284C3.43135 17.965 3.12283 17.4834 2.92718 17.1523C2.73906 16.8212 2.45311 16.2117 2.29509 15.7979C2.12954 15.384 1.94894 14.8271 1.88122 14.5562C1.82102 14.2929 1.73072 13.864 1.69309 13.6156C1.65547 13.3673 1.6028 12.8707 1.58022 12.5095C1.5426 11.9526 1.55012 11.8473 1.64794 11.8473C1.70814 11.8473 2.09191 11.8172 2.49826 11.772C2.89708 11.7269 3.55175 11.614 3.94304 11.5162C4.33434 11.4184 4.84603 11.2603 5.07178 11.17C5.29752 11.0873 5.75654 10.8766 6.08764 10.7035C6.41873 10.5379 6.87775 10.2746 7.1035 10.1166ZM8.57086 16.5127L5.18465 19.8989C5.53832 20.1924 5.90704 20.4558 6.23814 20.6815C6.56923 20.9073 7.0132 21.1706 7.21637 21.276C7.42707 21.3813 7.86352 21.5695 8.19461 21.7049C8.52571 21.8328 8.98473 21.9908 9.21047 22.051C9.43622 22.1112 9.89524 22.2166 10.2263 22.2768C10.5574 22.3295 10.9864 22.3821 11.1895 22.3821H11.5432C11.5432 21.1255 11.5959 20.4633 11.6636 20.087C11.7238 19.7183 11.8969 19.0561 12.0398 18.6197C12.1903 18.1832 12.4612 17.5286 12.6569 17.1523C12.8525 16.7836 13.2212 16.1967 13.4846 15.8581C13.7405 15.5119 13.9512 15.2109 13.9512 15.1808C13.9512 15.1432 13.4997 14.6691 12.9504 14.1273L11.9571 13.1265L8.57086 16.5127ZM19.4067 13.6156C19.7754 13.5103 20.3549 13.3974 20.686 13.3598C21.017 13.3222 21.4384 13.2921 21.6266 13.2845C21.8147 13.2845 22.048 13.3071 22.1458 13.3372C22.3113 13.3824 22.3189 13.4125 22.2662 13.7661C22.2436 13.9693 22.1684 14.3455 22.1006 14.5939C22.0404 14.8422 21.8523 15.384 21.6943 15.7979C21.5363 16.2117 21.2503 16.8212 21.0622 17.1523C20.8665 17.4834 20.5355 17.9801 19.9335 18.7627L18.1651 17.0169C17.1944 16.0537 16.3817 15.2335 16.3742 15.1959C16.3591 15.1507 16.63 14.9325 16.9762 14.7067C17.3148 14.481 17.8566 14.1875 18.1651 14.0521C18.4736 13.9166 19.0305 13.721 19.4067 13.6156ZM14.7421 16.8306C14.6514 16.9591 14.554 17.0969 14.4854 17.19C14.3801 17.3329 14.1318 17.792 13.9361 18.2058C13.7405 18.6197 13.4921 19.2969 13.3793 19.7108C13.2513 20.2225 13.1686 20.7718 13.1385 21.419C13.1084 21.9532 13.1008 22.3821 13.1234 22.3821C13.1362 22.3821 13.2122 22.37 13.321 22.3526L13.3211 22.3526L13.3213 22.3526C13.404 22.3393 13.5054 22.3231 13.6125 22.3069C13.8609 22.2617 14.2823 22.1714 14.5532 22.1112C14.8241 22.0435 15.3809 21.8629 15.7948 21.6974C16.2086 21.5394 16.8182 21.2534 17.1492 21.0653C17.4803 20.8696 17.977 20.5385 18.2629 20.3278L18.7671 19.9366C15.9979 17.1674 15.1702 16.3622 15.1401 16.3622C15.11 16.3622 14.9896 16.4901 14.8767 16.6406C14.8375 16.6956 14.7909 16.7615 14.7425 16.8301L14.7421 16.8306Z"
                      fill="#3A3A3A"/>
            </svg>
            Sport</CaruselItem>,

        <CaruselItem>
            <svg style={{marginRight: "15px"}} width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M23.7255 0.17C23.8993 0.312454 24 0.525312 24 0.750006V21.75C24 22.1075 23.7477 22.4153 23.3971 22.4854L15.8971 23.9854C15.8 24.0049 15.7 24.0049 15.6029 23.9854L8.25 22.5149L0.897087 23.9854C0.676756 24.0295 0.448274 23.9725 0.274508 23.83C0.100742 23.6876 0 23.4747 0 23.25V2.25001C0 1.8925 0.252345 1.58468 0.602913 1.51457L8.10291 0.0145709C8.20001 -0.00484834 8.29999 -0.00484834 8.39709 0.0145709L15.75 1.48515L23.1029 0.0145709C23.3232 -0.0294953 23.5517 0.0275458 23.7255 0.17ZM15 2.86486L9 1.66486V21.1352L15 22.3352V2.86486ZM16.5 22.3352L22.5 21.1352V1.66486L16.5 2.86486V22.3352ZM7.5 21.1352V1.66486L1.5 2.86486V22.3352L7.5 21.1352Z"
                      fill="#3A3A3A"/>
            </svg>
            Travel</CaruselItem>,
        <CaruselItem>
            <svg style={{marginRight: "15px"}} width="25" height="25" viewBox="0 0 25 25" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.4902 0.0195313L11.5608 1.25612C11.1681 1.77867 11.2952 2.45337 11.7188 2.83259V6.25H7.8125C6.08661 6.25 4.6875 7.64911 4.6875 9.375V14.0625H3.125C1.39911 14.0625 0 15.4616 0 17.1875V23.4375C0 24.3004 0.699557 25 1.5625 25H23.4375C24.3004 25 25 24.3004 25 23.4375V17.1875C25 15.4616 23.6009 14.0625 21.875 14.0625H20.3125V9.375C20.3125 7.64911 18.9134 6.25 17.1875 6.25H13.2812V2.82189C13.6964 2.43972 13.8169 1.77013 13.4245 1.25238L12.4902 0.0195313ZM6.25 9.375C6.25 8.51206 6.94956 7.8125 7.8125 7.8125H17.1875C18.0504 7.8125 18.75 8.51206 18.75 9.375V10.0223C18.3844 10.0223 18.0189 9.88279 17.7399 9.60387C16.5719 8.43583 14.6781 8.43583 13.5101 9.60387C12.9522 10.1617 12.0478 10.1617 11.4899 9.60387C10.3219 8.43583 8.42811 8.43583 7.26007 9.60387C6.98115 9.88279 6.61557 10.0223 6.25 10.0223V9.375ZM6.25 11.5848C7.01545 11.5848 7.78091 11.2927 8.36493 10.7087C8.92278 10.1509 9.82722 10.1509 10.3851 10.7087C11.5531 11.8768 13.4469 11.8768 14.6149 10.7087C15.1728 10.1509 16.0772 10.1509 16.6351 10.7087C17.2191 11.2927 17.9845 11.5847 18.75 11.5847V14.0625H6.25V11.5848ZM1.5625 17.1875C1.5625 16.3246 2.26206 15.625 3.125 15.625H21.875C22.7379 15.625 23.4375 16.3246 23.4375 17.1875V18.4264L22.885 18.9789C22.3272 19.5367 21.4227 19.5367 20.8649 18.9789C19.6968 17.8108 17.8031 17.8108 16.635 18.9789C16.0772 19.5367 15.1727 19.5367 14.6149 18.9789C13.4468 17.8108 11.5531 17.8108 10.385 18.9789C9.82719 19.5367 8.92274 19.5367 8.36489 18.9789C7.19685 17.8108 5.30308 17.8108 4.13504 18.9789C3.57719 19.5367 2.67274 19.5367 2.11489 18.9789L1.5625 18.4265V17.1875ZM19.76 20.0837C20.7579 21.0815 22.2853 21.227 23.4375 20.52V23.4375H1.5625V20.52C2.71468 21.227 4.24208 21.0815 5.23989 20.0837C5.79774 19.5259 6.70219 19.5259 7.26004 20.0837C8.42808 21.2518 10.3218 21.2518 11.4899 20.0837C12.0477 19.5259 12.9522 19.5259 13.51 20.0837C14.6781 21.2518 16.5718 21.2518 17.7399 20.0837C18.2977 19.5259 19.2022 19.5259 19.76 20.0837Z"
                    fill="black"/>
            </svg>
            Cooking</CaruselItem>,
    ];

    const [modal, setModal] = useState(false);
    ///Fixed menu logic
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const offsetTop = document.getElementById('fixed-element').offsetTop;
            const scrollTop = window.scrollY;

            if (scrollTop >= offsetTop) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Забезпечте очистку обробника подій при розмонтовуванні компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    ////////////    ///////////////

    return (
        <div>
            <div>
                <ListCarusel items={items}/>

                   <Menu/>
                    <RightMenu/>

            </div>

            <div style={{display: "flex", justifyContent: "center"}}>

                <PostList   /* posts={searchResult}*/ setModal={setModal} list={"User name"}/>

            </div>
            <ModalShare modal={modal} setModal={setModal}></ModalShare>
            <Pagination
                currentPage={currentPage}
                totalPageCount={10}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default Posts;
