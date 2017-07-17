;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-weibiaoti4" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M516.027733 0C231.059911 0 0 231.059911 0 516.027733c0 285.013333 231.059911 516.027733 516.027733 516.027733 284.967822 0 516.027733-231.0144 516.027733-516.027733C1032.055467 231.059911 800.995556 0 516.027733 0zM516.027733 980.468622c-256.500622 0-464.440889-207.940267-464.440889-464.440889 0-256.500622 207.940267-464.440889 464.440889-464.440889 256.500622 0 464.440889 207.940267 464.440889 464.440889C980.468622 772.528356 772.528356 980.468622 516.027733 980.468622zM632.126578 639.249067c-81.692444-11.400533-54.613333-98.7136-57.252978-97.439289-2.707911 1.297067 0.682667-18.363733 0.682667-18.363733 46.990222-24.940089 56.251733-94.230756 56.251733-94.230756l0-81.191822c0 0-12.0832-94.435556-87.176533-94.435556l-46.921956-21.367467c-83.535644 0-93.115733 115.780267-93.115733 115.780267s0.705422 25.281422 0 74.069333c-0.637156 48.787911 58.459022 102.900622 58.459022 102.900622s3.345067 19.6608 0.682667 18.363733c-2.707911-1.274311 22.050133 84.400356-59.5968 95.800889-81.692444 11.400533-129.888711 59.1872-145.271467 73.1136-26.715022 32.654222-24.052622 87.586133-24.052622 87.586133l563.268267 0c0 0 1.752178-50.244267-18.591289-82.830222C768.750933 699.619556 713.773511 650.6496 632.126578 639.249067z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-account" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M793.6 316.991454C793.6 153.703982 661.792629 21.333333 499.2 21.333333 336.607371 21.333333 204.8 153.703982 204.8 316.991454 204.8 480.278923 336.607371 612.649572 499.2 612.649572 661.792629 612.649572 793.6 480.278923 793.6 316.991454ZM256 316.991454C256 182.101803 364.88435 72.752137 499.2 72.752137 633.51565 72.752137 742.4 182.101803 742.4 316.991454 742.4 451.881103 633.51565 561.230769 499.2 561.230769 364.88435 561.230769 256 451.881103 256 316.991454Z"  ></path>' +
    '' +
    '<path d="M0 998.290598 0 1024 25.6 1024 486.4 1024 998.4 1024 1024 1024 1024 998.290598C1024 767.462671 787.090923 561.230769 512 561.230769 495.448045 561.230769 478.989086 561.900892 462.660538 563.232578 448.568439 564.381869 485.255599 576.786276 486.4 590.938596 501.350035 589.719337 496.831226 612.649572 512 612.649572 760.310844 612.649572 972.8 797.623669 972.8 998.290598L998.4 972.581197 486.4 972.581197 25.6 972.581197 51.2 998.290598C51.2 861.757427 137.013906 736.945338 275.263548 667.439085 287.906261 661.082846 293.024384 645.637353 286.695191 632.94061 280.366001 620.243866 264.986234 615.103872 252.34352 621.460111 97.581613 699.268053 0 841.195691 0 998.290598Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-charge" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 25.6c268.2112 0 486.4 218.1888 486.4 486.4 0 268.2112-218.1888 486.4-486.4 486.4C243.7888 998.4 25.6 780.2112 25.6 512 25.6 243.7888 243.7888 25.6 512 25.6M512 0C229.2224 0 0 229.2224 0 512c0 282.752 229.2224 512 512 512 282.752 0 512-229.248 512-512C1024 229.2224 794.752 0 512 0L512 0z"  ></path>' +
    '' +
    '<path d="M509.8496 435.84 347.2128 273.1776 365.312 255.0784 509.8496 399.6416 654.4896 255.0784 672.5888 273.1776Z"  ></path>' +
    '' +
    '<path d="M522.6496 810.0608 497.0496 810.0608 497.0496 439.1168 279.4496 439.1168 279.4496 413.5168 740.352 413.5168 740.352 439.1168 522.6496 439.1168Z"  ></path>' +
    '' +
    '<path d="M279.4496 560.9472l460.9024 0 0 25.6-460.9024 0 0-25.6Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M847.700845 439.6517c10.806155 0 19.594331-8.806861 19.594331-19.613016L867.295177 202.252612c0-41.21287-33.371401-74.571814-74.578043-74.571814l-561.421811 0c-41.200414 0-74.590499 33.358944-74.590499 74.571814l0 451.778262c0 41.181729 33.390086 74.540673 74.590499 74.540673l561.421811 0c41.200414 0 74.578043-33.352716 74.578043-74.540673l0-82.899094c-0.068512-10.768785-8.825546-19.532048-19.594331-19.532048-10.806155 0-19.594331 8.757034-19.631701 19.532048l0 0.049827 0 0.105882 0 0.031142 0 78.763482c0 21.680822-17.595037 39.263402-39.263402 39.263402l-319.326562 0-0.056055 0L235.219172 689.345514c-21.668366 0-39.282087-17.576352-39.282087-39.263402L195.937084 206.176461c0-21.680822 17.613722-39.263402 39.282087-39.263402l553.58657 0c21.668366 0 39.263402 17.576352 39.263402 39.263402l0 213.862222C828.062916 430.863524 836.851092 439.6517 847.700845 439.6517L847.700845 439.6517zM345.317389 269.45631c0-5.835947-4.70239-10.538337-10.52588-10.538337l-52.722827 0c-5.835947 0-10.557022 4.70239-10.557022 10.538337l0 52.641859c0 5.804805 4.721075 10.494739 10.557022 10.494739l52.722827 0c5.82349 0 10.52588-4.683705 10.52588-10.494739L345.317389 269.45631 345.317389 269.45631zM345.317389 404.125297c0-5.804805-4.70239-10.52588-10.52588-10.52588l-52.722827 0c-5.835947 0-10.557022 4.721075-10.557022 10.52588l0 52.641859c0 5.842175 4.721075 10.507195 10.557022 10.507195l52.722827 0c5.82349 0 10.52588-4.671249 10.52588-10.507195L345.317389 404.125297 345.317389 404.125297zM334.791509 528.280859l-52.722827 0c-5.835947 0-10.557022 4.73976-10.557022 10.538337l0 52.660544c0 5.804805 4.721075 10.457369 10.557022 10.457369l52.722827 0c5.82349 0 10.52588-4.652564 10.52588-10.457369l0-52.660544C345.317389 533.020619 340.614999 528.280859 334.791509 528.280859L334.791509 528.280859z"  ></path>' +
    '' +
    '<path d="M465.754638 492.81051l-2.765379 3.556377-0.105882 4.503084-1.980609 80.027833-0.467125 19.718898 18.348665-6.60826 77.08806-27.684934 3.743227-1.370233 2.416593-3.188906 207.447041-274.140016 8.202713-10.893352-10.843525-8.184028-69.103339-52.293072-10.438684-7.909981-8.090603 10.3764L465.754638 492.81051zM681.67221 237.978322l69.115796 52.255702-2.634584-19.064923L540.74375 545.315346l6.134907-4.546682-77.075604 27.684934 17.88154 13.123095 1.968153-80.046518-2.871261 8.071918 213.432468-274.108874L681.67221 237.978322zM709.375829 341.007384l15.701624-21.948641-60.146998-43.984478-15.707852 21.967326L709.375829 341.007384z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-statistics" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M185.07776 834.82624l87.77728 0c11.30496 0 20.48-9.15456 20.48-20.48l0-149.79072c0-11.32544-9.17504-20.48-20.48-20.48L185.07776 644.07552c-11.30496 0-20.48 9.15456-20.48 20.48l0 149.79072C164.59776 825.6512 173.7728 834.82624 185.07776 834.82624zM205.55776 685.01504l46.81728 0 0 108.83072-46.81728 0L205.55776 685.01504z"  ></path>' +
    '' +
    '<path d="M448.38912 834.82624c11.30496 0 20.48-9.15456 20.48-20.48l0-422.7072c0-11.32544-9.17504-20.48-20.48-20.48l-87.77728 0c-11.30496 0-20.48 9.15456-20.48 20.48l0 422.7072c0 11.32544 9.17504 20.48 20.48 20.48L448.38912 834.82624zM381.09184 412.11904l46.81728 0 0 381.7472-46.81728 0L381.09184 412.11904z"  ></path>' +
    '' +
    '<path d="M623.9232 834.82624c11.30496 0 20.48-9.15456 20.48-20.48L644.4032 531.6608c0-11.32544-9.17504-20.48-20.48-20.48L536.1664 511.1808c-11.30496 0-20.48 9.15456-20.48 20.48l0 282.68544c0 11.32544 9.17504 20.48 20.48 20.48L623.9232 834.82624zM556.6464 552.1408l46.81728 0 0 241.72544L556.6464 793.86624 556.6464 552.1408z"  ></path>' +
    '' +
    '<path d="M691.22048 199.94624l0 614.4c0 11.32544 9.17504 20.48 20.48 20.48l87.77728 0c11.30496 0 20.48-9.15456 20.48-20.48l0-614.4c0-11.32544-9.17504-20.48-20.48-20.48l-87.77728 0C700.39552 179.46624 691.22048 188.6208 691.22048 199.94624zM732.18048 220.42624l46.81728 0 0 573.44-46.81728 0L732.18048 220.42624z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-plan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M224.510822 256.593006m-64.768119 0a63.293 63.293 0 1 0 129.536238 0 63.293 63.293 0 1 0-129.536238 0Z"  ></path>' +
    '' +
    '<path d="M849.750909 223.754087 366.107747 223.754087c-7.976672 0-14.503319 6.526647-14.503319 14.503319l0 36.671201c0 7.976672 6.526647 14.504342 14.503319 14.504342l483.643162 0c7.976672 0 14.504342-6.52767 14.504342-14.504342l0 0 0-36.671201C864.255251 230.280734 857.727581 223.754087 849.750909 223.754087z"  ></path>' +
    '' +
    '<path d="M224.511845 510.568395m-64.767096 0a63.292 63.292 0 1 0 129.534192 0 63.292 63.292 0 1 0-129.534192 0Z"  ></path>' +
    '' +
    '<path d="M849.750909 477.730499 366.107747 477.730499c-7.976672 0-14.503319 6.526647-14.503319 14.502295l0 36.671201c0 7.976672 6.526647 14.504342 14.503319 14.504342l483.643162 0c7.976672 0 14.504342-6.52767 14.504342-14.504342L864.255251 492.233817C864.255251 484.257146 857.727581 477.730499 849.750909 477.730499z"  ></path>' +
    '' +
    '<path d="M224.511845 767.405971m-64.768119 0a63.293 63.293 0 1 0 129.536238 0 63.293 63.293 0 1 0-129.536238 0Z"  ></path>' +
    '' +
    '<path d="M849.750909 734.566028 366.107747 734.566028c-7.976672 0-14.503319 6.525624-14.503319 14.504342l0 36.671201c0 7.978718 6.526647 14.504342 14.503319 14.504342l483.643162 0c7.976672 0 14.504342-6.525624 14.504342-14.504342l0-36.671201C864.255251 741.091652 857.727581 734.566028 849.750909 734.566028z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jigou-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M724.243 952.816h-661.225v-716.332h220.408v-165.301h440.816v165.301h220.409v716.332h-220.409zM283.427 291.612h-165.307v606.103h165.307v-606.103zM448.734 897.716h110.204v-110.228h-110.204v110.228zM669.142 236.485v-110.201h-330.612v771.432h55.103v-165.328h220.409v165.328h55.103v-661.231zM889.55 291.612h-165.307v606.103h165.307v-606.103zM834.447 456.913h-55.102v-55.101h55.102v55.101zM834.447 622.187h-55.102v-55.128h55.102v55.128zM834.447 787.488h-55.102v-55.101h55.102v55.101zM393.631 567.059h220.409v55.128h-220.409v-55.128zM393.631 401.814h220.409v55.101h-220.409v-55.101zM393.631 236.485h220.409v55.128h-220.409v-55.128zM228.325 456.913h-55.102v-55.101h55.102v55.101zM228.325 622.187h-55.102v-55.128h55.102v55.128zM228.325 787.488h-55.102v-55.101h55.102v55.101z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bingfa" viewBox="0 0 1096 1024">' +
    '' +
    '<path d="M513.790746 888.312581c-68.764665-0.409313-132.515239-17.191166-191.251724-51.778155-30.289198-17.805136-57.610872-39.294094-81.658039-64.773858-49.322274-52.187469-81.555711-113.379834-95.984011-183.679424-8.595583-42.05696-9.823524-84.420905-3.888478-126.989507 7.879285-56.996902 27.833317-109.389028 59.759768-157.176377 18.521435-27.62866 40.317378-52.392126 65.490157-74.290397 34.484661-29.982212 73.062456-53.108424 115.938043-69.07165 27.219346-10.130509 55.154992-16.884181 84.011592-20.465674 28.958929-3.581493 57.917857-3.888478 86.979115-0.716299 53.517738 5.730389 103.453982 22.205256 149.808734 49.424603 29.982212 17.60048 57.201559 38.987109 81.146398 64.159888 49.731588 52.289797 82.169681 113.891476 96.802638 184.60038 6.753672 32.64275 9.004897 65.694814 6.753672 98.849206-3.581493 52.187469-17.60048 101.509743-41.340662 148.17148-4.707105 9.311882-12.074748 11.767763-18.726092 10.335165-9.721195-2.148896-14.632957-12.58639-10.232837-21.795943 4.502448-9.516538 9.107225-18.930748 13.098031-28.651944 10.64215-26.400719 17.805136-53.722394 21.488958-81.965024 7.367643-55.768962 1.944239-110.105326-17.088838-163.111422-12.893375-35.81493-31.210153-68.662336-55.25732-98.235235-47.582692-58.531828-107.854102-97.518937-180.81423-116.858999-33.768362-8.902568-68.150695-12.279404-102.94234-10.437494-69.378635 3.78615-132.105926 26.400719-187.772559 68.048366-44.205856 33.052064-78.281203 74.69971-102.430699 124.32897-16.781853 34.484661-27.321675 70.811232-31.824123 108.877386-6.139702 53.210752-0.409313 104.988908 17.60048 155.436794 12.58639 35.303288 30.698511 67.639053 54.029379 97.007295 25.172779 31.721795 54.950335 58.122514 89.434996 79.304487 32.540422 19.954032 67.536724 34.075347 104.886579 42.261617 36.224243 7.879285 72.8578 9.925852 109.798341 5.935045 61.294694-6.651344 116.552014-28.754272 166.283601-64.876187 8.80024-6.446687 17.088838-6.037374 23.22854 1.023284 5.832717 6.753672 4.809433 16.679524-2.353553 22.0006-48.810633 36.121915-102.94234 59.759768-162.906765 69.890277C553.698811 886.675327 533.437794 888.210253 513.790746 888.312581z"  ></path>' +
    '' +
    '<path d="M513.688418 532.619167c-2.967523 0.102328-5.935045-0.920955-8.902568-2.148896-71.732187-29.982212-143.464375-60.066753-215.196562-90.048966-11.767763-4.911762-16.372539-15.860897-10.846807-26.093734 2.251224-4.195463 5.935045-6.958329 10.335165-8.80024 35.200959-14.632957 70.401919-29.368242 105.50055-44.103528 36.326571-15.144599 72.653143-30.289198 108.877386-45.638453 6.856001-2.865194 13.098031-3.274508 20.056361-0.306985 71.527531 30.084541 143.15739 60.066753 214.787249 89.844309 10.437494 4.297792 14.939942 14.4283 12.381733 22.307585-2.046567 6.446687-6.651344 10.335165-12.688718 12.893375-16.986509 7.060658-33.973019 14.121315-50.8572 21.284301-54.541021 22.819227-109.082043 45.638453-163.520735 68.45768C520.646747 531.698211 517.372239 532.721495 513.688418 532.619167zM685.60008 423.537124c-1.125612-1.841911-2.455881-2.251224-3.683821-2.762866-54.745678-22.921555-109.593684-45.84311-164.339362-68.764665-2.455881-1.023284-4.40012-1.125612-6.958329-0.102328-54.745678 23.023883-109.491356 45.945438-164.237034 68.866993-1.22794 0.511642-3.172179 0.511642-3.172179 2.148896-0.102328 1.944239 2.046567 1.841911 3.376836 2.353553 54.64335 22.921555 109.286699 45.740781 163.930049 68.764665 2.558209 1.125612 4.809433 1.023284 7.367643-0.102328 48.094334-20.158689 96.188668-40.317378 144.283002-60.476067C669.943839 430.188468 677.720795 426.91396 685.60008 423.537124z"  ></path>' +
    '' +
    '<path d="M294.296393 489.948236c3.581493-0.102328 6.651344 1.125612 9.823524 2.455881 68.764665 28.754272 137.427001 57.508544 206.089337 86.262816 2.762866 1.125612 4.911762 1.125612 7.674628 0 68.355351-28.651944 136.608374-57.201559 204.963725-85.853503 4.809433-2.046567 9.618867-3.78615 15.04227-2.353553 7.367643 1.944239 12.484061 7.572299 13.609673 15.144599 1.023284 6.958329-2.455881 14.632957-9.209553 17.702808-9.925852 4.707105-20.261017 8.80024-30.391526 13.098031-62.420306 26.196063-124.840612 52.187469-187.260917 78.48586-7.265314 3.069851-13.916658 3.069851-21.284301 0-71.118217-29.982212-142.338763-59.759768-213.661637-89.434996-14.223643-5.935045-15.553912-19.340062-10.539822-27.117018C282.835615 492.813431 287.849705 490.255221 294.296393 489.948236z"  ></path>' +
    '' +
    '<path d="M294.705706 572.527231c3.069851-0.204657 6.139702 1.023284 9.107225 2.251224 68.45768 28.651944 136.915359 57.303887 205.373039 86.058159 3.581493 1.534926 6.446687 1.432597 9.925852-0.102328 68.560008-28.754272 137.120016-57.508544 205.680024-86.160488 12.484061-5.218747 24.251824 0.61397 26.503048 12.893375 1.534926 8.390926-3.274508 16.372539-12.381733 20.158689-13.81433 5.832717-27.62866 11.563106-41.44299 17.293495-57.815529 24.149495-115.52873 48.298991-173.344259 72.653143-6.856001 2.865194-13.20036 2.967523-20.158689 0.102328-71.527531-30.084541-143.15739-59.964425-214.787249-89.946637-14.223643-5.935045-17.395823-21.591286-6.344359-31.107825C286.31478 573.755171 290.100929 572.424903 294.705706 572.527231z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zonglan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M893.269633 16.452177 599.982899 16.452177c-24.29767 0-43.991953 19.631857-43.991953 43.879184l0 292.768199c0 24.254375 19.694283 43.926507 43.991953 43.926507l293.288748 0c24.292636 0 43.991953-19.673139 43.990946-43.926507L937.262593 60.330354C937.261586 36.084034 917.562269 16.452177 893.269633 16.452177z"  ></path>' +
    '' +
    '<path d="M424.017101 16.452177 130.730367 16.452177c-24.29767 0-43.991953 19.631857-43.991953 43.879184l0 292.768199c0 24.254375 19.694283 43.926507 43.991953 43.926507l293.288748 0c24.292636 0 43.991953-19.673139 43.990946-43.926507L468.010061 60.330354C468.009054 36.084034 448.309737 16.452177 424.017101 16.452177zM397.467073 298.940282c0.001007 15.279179-12.409613 27.671675-27.712957 27.671675L184.993351 326.611958c-15.306364 0-27.712957-12.393503-27.712957-27.671675L157.280394 114.507755c0-15.275151 12.406593-27.641469 27.712957-27.641469l184.759758 0c15.303344 0 27.712957 12.367325 27.712957 27.641469L397.466066 298.940282z"  ></path>' +
    '' +
    '<path d="M424.017101 483.830933 130.730367 483.830933c-24.29767 0-43.991953 19.631857-43.991953 43.879184l0 292.768199c0 24.254375 19.694283 43.926507 43.991953 43.926507l293.288748 0c24.292636 0 43.991953-19.673139 43.990946-43.926507L468.010061 527.710117C468.009054 503.46279 448.309737 483.830933 424.017101 483.830933z"  ></path>' +
    '' +
    '<path d="M893.269633 484.837798 599.982899 484.837798c-24.29767 0-43.991953 19.631857-43.991953 43.879184l0 292.768199c0 24.253368 19.694283 43.926507 43.991953 43.926507l293.288748 0c24.292636 0 43.991953-19.673139 43.990946-43.926507L937.262593 528.716982C937.261586 504.469655 917.562269 484.837798 893.269633 484.837798zM866.719606 767.325904c0.001007 15.279179-12.409613 27.671675-27.712957 27.671675L654.245884 794.997579c-15.307371 0-27.712957-12.393503-27.712957-27.671675L626.532927 582.893377c0-15.275151 12.406593-27.641469 27.712957-27.641469l184.759758 0c15.303344 0 27.712957 12.367325 27.712957 27.641469L866.718599 767.325904z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shebei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M86.992283 116.227118c-18.034748 0-32.654724 14.619976-32.654724 32.654724l0 571.365062c0 41.967834 31.873941 75.966159 75.967182 75.966159l259.776512 0c0 5.311982-1.594311 10.093892-1.594311 15.406898-1.594311 15.405875-10.092869 31.873941-10.092869 31.873941-1.594311 1.593288-5.313006 6.90527-5.313006 6.90527-6.906294 6.906294-10.093892 15.406898-10.093892 25.499767 0 20.186761 15.406898 31.873941 31.873941 31.873941l242.776326 0c16.999163 0 28.686343-15.405875 28.686343-31.873941 0-10.092869-1.594311-16.999163-10.092869-25.499767 0-1.592264-1.594311-1.592264-1.594311-1.592264-5.311982-4.78191-10.093892-10.093892-15.406898-54.18611l254.463506 0c41.968857 0 75.967182-31.873941 75.967182-75.967182L969.660394 149.756769c0-18.517749-15.011902-33.529651-33.529651-33.529651L86.992283 116.227118zM915.496797 642.857327 109.043509 642.857327 109.043509 172.47212l806.453289 0L915.496797 642.857327z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-charge1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M227.018655 951.676472c-4.628886 0-8.941654-2.528953-11.199647-6.638501-26.870121-48.253319 6.570761-115.406042 22.173495-142.072944l1.512856-2.574112 0-218.32538c0-102.061301 54.55312-197.235722 142.343903-248.469592l9.302933-5.396604-93.819625-167.24957c-2.619272-4.651466-2.235413-10.36419 1.106417-14.541477 2.438633-3.116031 6.119162-4.922426 10.025491-4.922426 1.264476 0 2.528953 0.180639 3.703109 0.564498l105.154752 31.928026L409.916119 198.929217l-74.423462-22.625094 78.51043 139.90527c1.670915 3.680529 7.586858 18.809085-2.551533 29.263594l-1.716075 1.761235c-1.061257 1.083837-1.128997 1.174157-2.280573 1.874135l-2.461213 1.467696c-85.939228 44.708269-139.747211 133.515149-139.747211 231.466902l0 225.799338c-15.083396 23.618611-39.469724 73.565424-32.537685 108.993341l1.738655 8.828754 581.839735 0 1.738655-8.828754c8.083616-41.298699-25.989504-97.590474-33.011863-108.654642L785.01398 582.065535c0-115.135083-73.452525-215.16419-182.716825-248.921191l-1.490276-0.451599-75.484719-0.474179c-7.067519 0-12.802822-5.870783-12.780243-13.073782 0.04516-7.112679 5.825623-12.915722 12.893142-12.915722l71.081632 0.406439 97.387255-108.970761-110.257817 36.692393c-1.354796 0.406439-2.664432 0.654818-3.974068 0.654818-5.261125 0-10.07065-3.29667-12.012525-8.286836l-40.282602-103.664476-34.953738 121.254245-24.770187-7.044939 45.566307-158.014377c1.512856-5.374024 6.277222-9.122293 11.741566-9.370673 0.02258 0 0.04516 0 0.04516 0 6.028842 0 10.544829 3.25151 12.486703 8.219096l49.608115 127.666946 144.827696-48.140419c1.287056-0.451599 2.596692-0.632238 3.996648-0.632238 4.357927 0 8.399735 2.190254 10.748049 5.893363 3.228931 4.967585 2.732172 11.470606-1.196736 15.828534l-120.034928 134.237707 13.864079 6.074002c104.093495 45.521147 171.381698 148.779184 171.381698 262.98849l0 217.489923 1.490276 2.574112c15.783374 26.779802 49.698434 94.361544 22.692834 142.908401-2.257993 4.086968-6.548181 6.638501-11.177067 6.638501L227.018655 951.631312z"  ></path>' +
    '' +
    '<path d="M823.693407 962.266461 227.018655 962.266461c-8.512635 0-16.370452-4.628886-20.48-12.102845-29.511974-52.972525 5.780463-124.325116 22.331555-152.550033l0.04516-0.1129 0-215.435149c0-105.78699 56.562734-204.506461 147.605028-257.637045l0.316119-0.15806-88.73914-158.149857c-4.741786-8.490055-3.928908-18.809085 2.077354-26.328203 5.870783-7.519118 16.528512-10.680309 25.357266-7.767497l114.954443 34.885998-13.480221 45.227607-59.407806-18.063947 65.617288 116.918897c5.870783 12.712503 7.519118 29.782933-4.222448 41.863197l-1.716075 1.761235c-1.580595 1.648335-2.370893 2.348313-4.357927 3.52247l-2.483793 1.512856c-83.274796 43.353473-134.644146 128.434664-134.644146 222.412348l0 228.915369-1.670915 2.619272c-13.480221 21.067078-37.302051 69.342977-31.069989 101.225843l0.04516 0.248379 564.475766-0.270959c5.667563-28.879735-13.457641-72.436428-31.566748-100.932304l-1.648335-2.596692L774.356251 582.065535c0-110.461036-70.404234-206.425755-175.242867-238.80538l-73.926703-0.451599c-12.870562-0.04516-23.347652-10.657729-23.302492-23.686351 0.1129-12.960882 10.657729-23.483131 23.505711-23.483131l66.362426 0.383859 67.694642-75.733098-72.481588 24.115369c-13.931819 4.245028-24.905667-2.709592-29.218434-13.841499l-28.902315-74.423462L499.671356 257.411246l-45.159868-12.825402 48.524278-168.243087c2.732172-9.686792 11.335127-16.551092 21.428357-17.00269 0 0 0.02258 0 0.02258 0 10.725469 0 19.283264 5.735303 22.896053 14.970496l45.972745 118.273693 135.231224-44.956648c8.625535-3.003131 21.270298 0.587078 27.028181 9.619052 5.757883 8.873914 4.854686 20.660639-2.280573 28.586196l-110.280397 123.331599 0.496759 0.203219c107.909504 47.192062 177.681499 154.266108 177.681499 272.697861l0.04516 214.690011c16.731731 28.382977 52.475766 100.164587 22.805733 153.43065C840.063859 957.637574 832.206042 962.266461 823.693407 962.266461zM309.096714 152.211334l-0.04516 0.04516-2.348313 0.790298c-0.587078 0.745138-0.654818 1.806395-0.13548 2.732172l98.94527 176.349283-18.334906 10.635149c-84.539272 49.337155-137.082778 141.034267-137.082778 239.324719l0 221.193032-2.935391 5.057905c-14.722117 25.086307-46.288864 88.106902-22.083175 131.573275 0.406439 0.745138 1.151577 1.196736 1.941874 1.196736l596.697332 0c0.767718 0 1.512856-0.451599 1.896714-1.128997 24.341169-43.759912-7.654598-107.209526-22.512194-132.453892l-3.003131-5.057905 0-220.380154c0-110.032018-64.75925-209.451466-165.014157-253.301698l-27.25398-11.967365 129.7443-145.098655c0.745138-0.835458 0.835458-2.054774 0.225799-2.980551l-1.851555-1.083837-155.011246 51.414509-53.266064-137.037619c-0.203219-0.519338-0.587078-1.467696-2.641852-1.467696-0.519338 0.02258-1.332216 0.699978-1.603175 1.648335l-42.630915 147.853407 4.380507 1.241896 40.734201-141.237486 51.640309 132.905491c0.361279 0.880617 1.219316 1.512856 2.145094 1.512856l148.643705-49.359735-127.102448 142.208423-75.868578-0.451599c-1.174157 0-2.235413 1.106417-2.257993 2.416053 0 1.287056 0.993517 2.393473 2.212834 2.393473l78.51043 0.925777c115.315722 35.608556 191.748798 139.724631 191.748798 259.51118l0 223.112326c11.718986 18.967144 41.00516 71.84935 32.808644 113.712547l-3.40957 17.386549L225.709019 936.344697l-3.43215-17.363969c-8.512635-43.556692 23.686351-99.938787 32.334465-114.073826l0-222.773627c0-101.903241 55.749857-194.187431 145.459934-240.860154l3.770849-3.138611c5.509504-5.667563 1.399956-15.534994 0.519338-17.476869l-91.019713-162.123925 89.461698 27.20882L404.180816 181.06849 309.096714 152.211334z"  ></path>' +
    '' +
    '<path d="M495.494068 734.796207l-58.233649 0c-11.538346-1.038677-17.860728-6.81914-18.854245-17.296229 1.016097-10.499669 7.315899-16.280132 18.854245-17.318809l58.233649 0 0-26.779802-58.233649 0c-11.538346-1.016097-17.860728-6.79656-18.854245-17.318809 1.016097-10.477089 7.315899-16.257552 18.854245-17.296229l33.034443 0L419.98677 568.020816c-4.222448-5.238545-6.322381-11.019008-6.322381-17.341389 2.099934-17.815568 12.057685-27.773319 29.895832-29.895832 10.477089 1.061257 18.357486 5.283705 23.596031 12.599603l58.233649 83.410276 58.233649-83.410276c5.215965-7.315899 13.096362-11.538346 23.618611-12.599603 17.792988 2.122514 27.750739 12.080265 29.873252 29.895832 0 6.299802-2.122514 12.080265-6.299802 17.341389l-50.330673 70.810673 33.034443 0c11.515766 1.038677 17.815568 6.81914 18.854245 17.296229-1.038677 10.522249-7.338479 16.302712-18.854245 17.318809l-58.211069 0 0 26.779802 58.211069 0c11.515766 1.038677 17.815568 6.81914 18.854245 17.318809-1.038677 10.477089-7.338479 16.257552-18.854245 17.296229l-58.211069 0 0 48.772657c-1.083837 17.860728-11.019008 26.757222-29.918412 26.757222-18.854245 0-28.857155-8.896494-29.895832-26.757222L495.494068 734.796207z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-taocan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M992.979388 338.348532l-171.412867 171.412867c-38.376015 38.376015-99.777639 38.376015-138.153654 0l-171.412867-171.412867c-38.376015-38.376015-38.376015-99.777639 0-138.153654l171.412867-171.412867c38.376015-38.376015 99.777639-38.376015 138.153654 0l171.412867 171.412867C1031.355403 238.570893 1031.355403 299.972517 992.979388 338.348532L992.979388 338.348532M941.811368 218.103685l-138.153654-138.153654c-28.142411-28.142411-74.193629-28.142411-102.33604 0l-138.153654 138.153654c-28.142411 28.142411-28.142411 74.193629 0 102.33604l138.153654 138.153654c28.142411 28.142411 74.193629 28.142411 102.33604 0l138.153654-138.153654C969.953779 292.297314 969.953779 246.246096 941.811368 218.103685L941.811368 218.103685M340.587133 1021.441599 151.265459 1021.441599 199.875078 972.83198l117.686446 0c40.934416 0 71.635228-33.259213 71.635228-71.635228l0-194.438476c0-40.934416-33.259213-71.635228-71.635228-71.635228L123.123048 635.123048C82.188632 632.564647 51.48782 665.82386 51.48782 706.758276l0 117.686446-48.609619 48.609619 0-189.321674c0-53.726421 43.492817-97.219238 97.219238-97.219238l243.048095 0c53.726421 0 97.219238 43.492817 97.219238 97.219238l0 243.048095C437.806371 977.948782 394.313554 1021.441599 340.587133 1021.441599L340.587133 1021.441599M340.587133 486.73579 97.539038 486.73579c-53.726421 0-97.219238-43.492817-97.219238-97.219238L0.3198 149.026858C2.878201 95.300437 46.371018 51.80762 97.539038 51.80762l243.048095 0c53.726421 0 97.219238 43.492817 97.219238 97.219238l0 243.048095C437.806371 443.242973 394.313554 486.73579 340.587133 486.73579L340.587133 486.73579M389.196752 172.052467c0-40.934416-33.259213-71.635228-71.635228-71.635228L123.123048 100.417239C82.188632 100.417239 51.48782 131.118051 51.48782 172.052467l0 194.438476c0 40.934416 33.259213 71.635228 71.635228 71.635228l194.438476 0c40.934416 0 71.635228-33.259213 71.635228-71.635228L389.196752 172.052467 389.196752 172.052467M632.244847 583.955028l243.048095 0c53.726421 0 97.219238 43.492817 97.219238 97.219238l0 243.048095c0 53.726421-43.492817 97.219238-97.219238 97.219238l-243.048095 0c-53.726421 0-97.219238-43.492817-97.219238-97.219238l0-243.048095C535.025609 627.447845 578.518426 583.955028 632.244847 583.955028L632.244847 583.955028M583.635228 901.196752c0 40.934416 33.259213 71.635228 71.635228 71.635228l194.438476 0c40.934416 0 71.635228-33.259213 71.635228-71.635228l0-194.438476c0-40.934416-33.259213-71.635228-71.635228-71.635228l-194.438476 0c-40.934416 0-71.635228 33.259213-71.635228 71.635228L583.635228 901.196752 583.635228 901.196752M583.635228 901.196752 583.635228 901.196752z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huiyishi" viewBox="0 0 1237 1024">' +
    '' +
    '<path d="M893.866667 407.808H810.666667a216.405333 216.405333 0 0 0-113.066667-148.352 149.546667 149.546667 0 0 0 49.877333-111.445333C747.477333 66.389333 682.368 0 602.24 0c-80.042667 0-145.194667 66.389333-145.194667 147.968 0 42.794667 18.389333 83.498667 49.834667 111.445333a216.448 216.448 0 0 0-113.066667 148.352H308.736C138.453333 407.765333 0 546.005333 0 715.946667S138.496 1024 308.693333 1024H893.866667c170.24 0 308.778667-138.197333 308.778666-308.096s-138.496-308.096-308.778666-308.096z m-291.626667-348.757333c47.786667 0 86.656 39.808 86.656 88.746666 0 48.896-38.826667 88.704-86.613333 88.704-47.786667 0-86.656-39.808-86.656-88.746666 0-48.896 38.826667-88.704 86.613333-88.704z m0 236.928c69.717333 0 128.810667 47.189333 148.266667 111.786666h-296.533334c19.541333-64.64 78.634667-111.786667 148.266667-111.786666z m0 533.461333c76.586667 0 140.202667 57.002667 152.746667 131.413333h-305.450667c12.586667-74.453333 76.202667-131.413333 152.746667-131.413333z m-86.613333-148.224c0-48.896 38.826667-88.704 86.613333-88.704 47.786667 0 86.656 39.808 86.656 88.746667 0 48.896-38.826667 88.704-86.613333 88.704-47.786667 0-86.656-39.808-86.656-88.746667z m378.197333 279.68h-80a216.874667 216.874667 0 0 0-116.181333-167.978667 149.504 149.504 0 0 0 49.834666-111.445333c0-81.621333-65.109333-148.010667-145.237333-148.010667-80.042667 0-145.194667 66.389333-145.194667 148.010667 0 42.752 18.389333 83.456 49.834667 111.445333a216.874667 216.874667 0 0 0-116.181333 167.978667H308.693333c-135.381333 0-245.546667-109.909333-245.546666-244.992s110.165333-244.992 245.546666-244.992H893.866667c135.466667 0 245.632 109.909333 245.632 244.992s-110.165333 244.992-245.632 244.992z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jifeiguanli" viewBox="0 0 1029 1024">' +
    '' +
    '<path d="M876.032 747.008c0 15.872-5.632 30.208-16.896 40.96-11.776 11.776-25.088 16.896-41.472 16.896h-235.52v115.712H875.52c16.384 0 31.744-3.072 46.08-8.704 13.824-6.144 27.136-13.824 37.376-24.576 10.752-10.24 18.944-22.528 25.6-36.864 6.656-13.824 9.216-29.184 9.216-45.056V228.864c0-15.872-3.072-31.232-9.216-44.544-6.144-13.312-14.848-25.6-25.6-36.864-10.752-10.24-23.04-18.944-37.376-25.088-13.824-6.144-29.184-9.216-46.08-9.216h-708.608c-16.384 0-31.744 3.072-46.08 9.216-13.824 6.144-27.136 14.848-37.376 25.088-10.752 10.24-18.944 22.528-25.6 36.864-6.144 13.824-9.216 28.672-9.216 44.544v170.496l118.272 3.584v-2.048c0-15.872 6.144-29.184 17.92-40.448s25.6-16.384 41.984-16.384h590.848c16.384 0 30.208 5.632 41.472 16.384 11.776 10.752 16.896 24.576 16.896 40.448v346.112z m-560.128-349.184c-37.376 0-72.192 6.656-104.448 20.992-32.256 13.824-60.416 32.256-84.992 56.32-24.576 24.064-43.52 51.2-57.344 83.968-13.824 31.744-21.504 66.048-21.504 101.888 0 35.84 7.168 70.144 21.504 101.888 13.824 31.744 33.792 59.392 57.344 82.432 24.576 23.04 52.736 41.984 84.992 55.808 32.256 13.824 67.072 20.992 104.448 20.992 37.376 0 72.192-6.656 104.448-20.992 32.256-13.824 60.416-32.256 84.992-55.808s43.52-50.688 57.344-82.432c13.824-31.744 21.504-65.536 21.504-101.888 0-36.864-7.168-70.144-21.504-101.888-13.824-31.744-33.792-59.904-57.344-83.968-24.064-24.064-52.736-41.984-84.992-56.32-32.256-13.312-67.072-20.992-104.448-20.992z m-66.048 233.984l-82.944-76.288 41.472-41.984 93.696 88.576-30.208 30.72h98.816l-30.208-37.888 87.04-82.944 35.84 46.08-79.36 74.752h79.36v57.856h-118.272V748.032h118.272v57.856h-118.272v57.344h-59.392v-57.344h-118.272V748.032h118.272v-57.344h-118.272v-57.856h82.432v-1.024z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shebei1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M97.270246 155.930064c209.084428 0 418.176081 0 627.260509 0 17.780738 2.817752 31.855048 11.812884 38.314203 27.621195 4.609553 11.234883 3.561928 25.525944 3.561928 40.98023 0 14.05986 0 29.391322 0 44.549383-14.847386 0-29.694772 0-44.556608 0-0.4624-15.750512 1.603951-29.282946-2.666027-40.091554-4.204953-10.656883-16.407987-23.091117-28.502646-26.725295-8.698906-2.615452-20.865815-1.784576-33.870825-1.784576-128.633994 0-256.617738 0-386.682283 0-28.892796 0-72.018853 0-105.138277 0-12.239159 0-23.885867-0.830876-32.967699 1.784576-14.00206 4.017103-25.157468 15.902237-29.398547 26.725295-3.814803 9.753757-2.673252 24.731193-2.673252 40.987455 0 88.81699 0 173.739702 0 261.949792 0 15.338686-1.943526 34.16705 1.784576 44.563833 4.631228 12.896634 16.270712 24.788993 28.509871 28.502646 15.049686 4.573428 39.665279 1.791801 58.804318 1.791801 141.039328 0 282.945657 0 424.122261 0 0 37.411077 0 74.822155 0 112.254907-155.612164 0-332.198518 0-493.612362 0-13.546885 0-27.29607 1.033176-36.529627-2.666027-5.035829-2.030226-11.097608-6.516955-15.143611-10.707458-7.737981-7.976406-9.724857-15.439836-12.484809-27.606745 0-160.084442 0-320.161659 0-480.246102C59.273943 173.768602 72.929203 159.513667 97.270246 155.930064z"  ></path>' +
    '' +
    '<path d="M982.029944 357.298187c0 162.757694 0 325.522613 0 488.273083-2.781627 18.019163-13.041135 28.545996-30.279997 32.071798-91.186792 0-182.351909 0-273.531475 0-13.243435-2.326452-23.177817-9.746532-27.621195-20.490115-4.855204-11.740634-2.673252-42.092881-2.673252-63.269371 0-139.623227 0-278.509504 0-416.102505 0-12.022409-0.744176-23.423467 1.784576-30.279997 1.112651-3.070627 4.602328-8.178706 8.012531-11.588908 11.126508-11.126508 25.049093-9.797107 47.222635-9.797107 63.984647 0 120.693713 0 185.328611 0 16.776462 0 39.629154-0.888676 56.123841 0 6.003979 0.325125 12.296959 1.025951 16.046737 2.666027 1.076526 0.47685 1.510026 1.914626 2.666027 2.673252 1.257151 0.823651 3.533028 1.025951 4.465053 1.791801 2.297552 1.907401 3.706428 4.811854 5.332054 7.123855 0.801976 1.148776 2.030226 1.531701 2.687702 2.673252C980.144218 347.537205 980.043068 351.944458 982.029944 357.298187zM731.669061 373.337698c2.355352 4.978029 8.648331 4.400028 17.824088 4.450603 40.756255 0.223975 74.807705 0 114.032259 0 7.15998 0 16.422437 0.700826 23.170592 0 4.884104-0.4913 6.083454 0.151725 8.901207-2.673252 2.037451-2.023001 3.757003-4.233853 2.666027-8.901207-1.184901-5.180329-5.794454-5.787229-14.24771-6.242405-20.085515-1.069301-43.472857 0-62.380696 0-32.563099 0-58.081818-1.885726-83.759486 0-0.917576 0.07225-0.50575 0.751401-0.888676 0.895901C732.622762 362.608566 728.764609 367.268694 731.669061 373.337698zM680.870049 414.325153c0 131.560121 0 263.134693 0 394.723714 89.402215 0 178.789981 0 268.184971 0 0-132.477697 0-264.940944 0-397.396966-89.098765 0-178.190306 0-267.296296 0C680.725549 411.803627 680.805024 413.053553 680.870049 414.325153zM800.270486 851.813674c2.846652 4.573428 6.892655 8.395456 12.470359 8.879532 2.514302 0.238425 6.55308 0.01445 8.908432-0.888676 2.557652-0.975376 7.831906-6.170155 8.901207-8.893982 2.955027-7.47788 0.281775-14.659536-1.777351-17.824088-2.131377-3.229577-4.017103-4.327778-6.227955-5.332054-4.031553-1.864051-6.040104-2.550427-12.484809-0.903126C798.030734 829.914683 794.952882 843.252043 800.270486 851.813674z"  ></path>' +
    '' +
    '<path d="M323.586312 742.217569c58.515318 0 117.016186 0 175.524279 0 0 22.267466 0 44.549383 0 66.831299 2.940577 3.244027 7.11663 4.233853 10.693008 6.227955 5.584929 3.113977 11.776759 6.76983 17.824088 10.685783 1.661751 1.083751 4.501178 2.810527 7.11663 4.457828 2.261427 1.387201 4.125478 2.442052 6.227955 4.457828 0.932026 0.867001 4.407253 2.940577 6.242405 4.436153 1.401651 1.141551 2.694927 1.943526 4.443378 3.554703 1.069301 1.025951 2.839427 2.044676 4.465053 3.583603 3.807578 3.569153 16.949862 11.133733 16.046737 19.601439-1.697876 15.945587-56.477866 10.685783-75.73973 10.685783-74.69933 0-139.225852 0-213.845707 0-22.455316 0-42.548056-4.219403-27.621195-21.378791 1.445001-1.661751 4.089353-4.580653 6.242405-6.23518 0.614125-0.47685 2.023001-0.339575 2.666027-0.888676 2.160277-1.864051 3.706428-4.515628 6.242405-6.24963 0.6647-0.440725 1.936301-0.339575 2.666027-0.888676 0.751401-0.5491 1.047626-2.145827 1.777351-2.666027 0.867001-0.59245 1.907401-0.310675 2.680477-0.888676 13.893685-10.331758 29.962097-19.897665 45.445283-27.606745 0-21.689466 0-43.378932 0-65.053948C322.618161 743.611995 322.553136 742.369294 323.586312 742.217569z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)