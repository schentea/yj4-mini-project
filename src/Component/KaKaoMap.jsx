import React, { useEffect, useRef, useState } from "react";
import "./KaKaoMap.css";
import { IoSearch } from "react-icons/io5";
import { PiMapPinLine } from "react-icons/pi";
import { MdGpsFixed } from "react-icons/md";

export default function KaKaoMap() {
  const apiKey = "271da05001582197a052d62dc0a58327";
  const [search, setSearch] = useState("제주 공항");
  const [empty, setEmpty] = useState(true);
  const searchPlacesRef = useRef(null); // searchPlaces 함수를 저장할 ref
  const [isFocused, setIsFocused] = useState(false); // 포커스 상태 관리
  const [isHovered, setIsHovered] = useState(false); // 호버 상태 관리

  // 포커스 또는 호버 상태에 따라 적절한 클래스를 반환하는 함수
  const computeClassName = () => {
    if (isFocused || isHovered) {
      return "boxShadow";
    }
    return "";
  };

  const formRef = useRef(null);

  // 폼 제출 핸들러
  const handleSubmit = (event) => {
    event.preventDefault();
    setEmpty(false);
    if (searchPlacesRef.current) {
      searchPlacesRef.current(); // searchPlaces 함수를 참조하여 호출
    }
  };

  // 카카오 API 호출
  useEffect(() => {
    const script = document.createElement("script");
    // script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services`;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      window.kakao.maps.load(() => {
        // 마커를 담을 배열입니다
        var markers = [];

        var mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new window.kakao.maps.LatLng(33.510001, 126.492778), // 지도의 중심좌표
            level: 5, // 지도의 확대 레벨
          };

        // 지도를 생성합니다
        var map = new window.kakao.maps.Map(mapContainer, mapOption);
        // 장소 검색 객체를 생성합니다
        var ps = new window.kakao.maps.services.Places();

        // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
        var infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

        // searchPlaces 함수 정의
        const searchPlaces = () => {
          const keyword = search;

          if (!keyword.replace(/^\s+|\s+$/g, "")) {
            alert("키워드를 입력해주세요!");
            return;
          }

          ps.keywordSearch(keyword, (data, status, pagination) => {
            if (status === window.kakao.maps.services.Status.OK) {
              // 검색 성공 시 로직
              displayPlaces(data);
              displayPagination(pagination);
            } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
              alert("검색 결과가 존재하지 않습니다.");
            } else if (status === window.kakao.maps.services.Status.ERROR) {
              alert("검색 결과 중 오류가 발생했습니다.");
            }
          });
        };
        // searchPlaces 함수를 useRef에 저장
        searchPlacesRef.current = searchPlaces;

        // 검색 결과 목록과 마커를 표출하는 함수입니다
        function displayPlaces(places) {
          var listEl = document.getElementById("placesList"),
            menuEl = document.getElementById("menu_wrap"),
            fragment = document.createDocumentFragment(),
            bounds = new window.kakao.maps.LatLngBounds(),
            listStr = "";

          // 검색 결과 목록에 추가된 항목들을 제거합니다
          removeAllChildNods(listEl);

          // 지도에 표시되고 있는 마커를 제거합니다
          removeMarker();

          for (var i = 0; i < places.length; i++) {
            // 마커를 생성하고 지도에 표시합니다
            var placePosition = new window.kakao.maps.LatLng(places[i].y, places[i].x),
              marker = addMarker(placePosition, i),
              itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            bounds.extend(placePosition);

            // 마커와 검색결과 항목에 mouseover 했을때
            // 해당 장소에 인포윈도우에 장소명을 표시합니다
            // mouseout 했을 때는 인포윈도우를 닫습니다
            (function (marker, title) {
              window.kakao.maps.event.addListener(marker, "mouseover", function () {
                displayInfowindow(marker, title);
              });

              window.kakao.maps.event.addListener(marker, "mouseout", function () {
                infowindow.close();
              });

              itemEl.onmouseover = function () {
                displayInfowindow(marker, title);
              };

              itemEl.onmouseout = function () {
                infowindow.close();
              };
            })(marker, places[i].place_name);

            fragment.appendChild(itemEl);
          }

          // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
          listEl.appendChild(fragment);
          menuEl.scrollTop = 0;

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }

        // 검색결과 항목을 Element로 반환하는 함수입니다
        function getListItem(index, places) {
          var el = document.createElement("li"),
            itemStr = `<span class="markerbg marker_${index + 1}"></span><div class="info">   <h5 class="add">${places.place_name}</h5>`;

          if (places.road_address_name) {
            itemStr += `<span>${places.road_address_name}</span>`;
            // <span class="jibun gray">${places.address_name}</span>
          } else {
            itemStr += `<span>${places.address_name}</span>`;
          }

          itemStr += `  <span class="tel">${places.phone}</span></div>`;

          el.innerHTML = itemStr;
          el.className = "item";

          return el;
        }

        // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
        function addMarker(position, idx, title) {
          var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
            imageSize = new window.kakao.maps.Size(36, 37), // 마커 이미지의 크기
            imgOptions = {
              spriteSize: new window.kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
              spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
              offset: new window.kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
            },
            markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
            marker = new window.kakao.maps.Marker({
              position: position, // 마커의 위치
              image: markerImage,
            });

          marker.setMap(map); // 지도 위에 마커를 표출합니다
          markers.push(marker); // 배열에 생성된 마커를 추가합니다

          return marker;
        }

        // 지도 위에 표시되고 있는 마커를 모두 제거합니다
        function removeMarker() {
          for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
          }
          markers = [];
        }

        // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
        function displayPagination(pagination) {
          var paginationEl = document.getElementById("pagination"),
            fragment = document.createDocumentFragment(),
            i;

          // 기존에 추가된 페이지번호를 삭제합니다
          while (paginationEl.hasChildNodes()) {
            paginationEl.removeChild(paginationEl.lastChild);
          }

          for (i = 1; i <= pagination.last; i++) {
            var el = document.createElement("a");
            el.href = "#";
            el.innerHTML = i;

            if (i === pagination.current) {
              el.className = "on";
            } else {
              el.onclick = (function (i) {
                return function () {
                  pagination.gotoPage(i);
                };
              })(i);
            }

            fragment.appendChild(el);
          }
          paginationEl.appendChild(fragment);
        }

        // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
        // 인포윈도우에 장소명을 표시합니다
        function displayInfowindow(marker, title) {
          var content = '<div style="padding:5px;z-index:1;">' + title + "</div>";

          infowindow.setContent(content);
          infowindow.open(map, marker);
        }

        // 검색결과 목록의 자식 Element를 제거하는 함수입니다
        function removeAllChildNods(el) {
          while (el.hasChildNodes()) {
            el.removeChild(el.lastChild);
          }
        }
      });
    });
  }, [search]);

  // 지도 버튼 목록
  const mapArr = ["한라산 공원", "제주민속촌", "동문시장", "제주 주상절리대", "귤귤귤"];

  return (
    <section id="kakaoMap" className="mt-16 xl:mt-32">
      <h2>
        제주도, 지도로&nbsp;
        <span className=" font-bold text-[#ef6d00]">먼저 살펴보기&nbsp;</span>
        <MdGpsFixed className="inline-block" size="40px" />
      </h2>
      <div id="mapBtnWrap">
        {mapArr.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setSearch(item);
              setTimeout(() => {
                formRef.current.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
              }, 150);
            }}
          >
            # {item}
          </button>
        ))}
      </div>
      <div className="map_wrap">
        <div id="map"></div>
        <div id="menu_wrap">
          <div className="option">
            <div>
              <form onSubmit={handleSubmit} ref={formRef}>
                <div id="searchWrap" className={computeClassName()} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                  <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} id="keyword" size="15" />
                  <button type="submit">
                    <IoSearch size="25px" color="#ef6d00" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <hr />
          <ul id="placesList">
            {empty && (
              <p id="list404Txt">
                <PiMapPinLine size="100px" color="#777" />
                키워드를 입력하거나 버튼을 눌러서 제주도의 관광지를 확인해보세요.
              </p>
            )}
          </ul>
          <div id="pagination"></div>
        </div>
      </div>
    </section>
  );
}
