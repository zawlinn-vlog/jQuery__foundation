'use strict';

$(document).ready(function () {
  const divEl = document.createElement('div');

  /* 

  The keystone of AJAX is the XMLHttpRequest object.

      1. Create an XMLHttpRequest object
      2. Define a callback function
      3. Open the XMLHttpRequest object
      4. Send a Request to a server

    ReadyState -
      Holds the status of the XMLHttpRequest.
        0: request not initialized
        1: server connection established
        2: request received
        3: processing request
        4: request finished and response is ready

    Status -
    Returns the status-number of a request
        200: "OK"
        403: "Forbidden"
        404: "Not Found"
        For a complete list go to the Http Error Messages

  HTML Error Messages
      When a browser requests a service from a web server, an error might occur, and the server might return an error code like "404 Not Found".

      It is common to name these errors HTML error messages.

      But these messages are something called HTTP status messages. In fact, the server always returns a message for every request. The most common message is 200 OK.

      Below is a list of HTTP status messages that might be returned:

    1xx: Information
      Message:	Description:

      100 Continue	The server has received the request headers, and the client should proceed to send the request body

      101 Switching Protocols	The requester has asked the server to switch protocols

      103 Early Hints	Used with the Link header to allow the browser to start preloading resources while the server prepares a response


    2xx: Successful
      Message:	Description:

      200 OK	The request is OK (this is the standard response for successful HTTP requests)

      201 Created	The request has been fulfilled, and a new resource is created 

      202 Accepted	The request has been accepted for processing, but the processing has not been completed

      203 Non-Authoritative Information	The request has been successfully processed, but is returning information that may be from another source

      204 No Content	The request has been successfully processed, but is not returning any content

      205 Reset Content	The request has been successfully processed, but is not returning any content, and requires that the requester reset the document view

      206 Partial Content	The server is delivering only part of the resource due to a range header sent by the client

    3xx: Redirection

      Message:	Description:

      300 Multiple Choices	A link list. The user can select a link and go to that location. Maximum five addresses  

      301 Moved Permanently	The requested page has moved to a new URL 

      302 Found	The requested page has moved temporarily to a new URL

      303 See Other	The requested page can be found under a different URL

      304 Not Modified	Indicates the requested page has not been modified since last requested

      307 Temporary Redirect	The requested page has moved temporarily to a new URL

      308 Permanent Redirect	The requested page has moved permanently to a new URL
      ADVERTISEMENT

    4xx: Client Error
      Message:	Description:

      400 Bad Request	The request cannot be fulfilled due to bad syntax

      401 Unauthorized	The request was a legal request, but the server is refusing to respond to it. For use when authentication is possible but has failed or not yet been provided

      402 Payment Required	Reserved for future use

      403 Forbidden	The request was a legal request, but the server is refusing to respond to it

      404 Not Found	The requested page could not be found but may be available again in the future

      405 Method Not Allowed	A request was made of a page using a request method not supported by that page

      406 Not Acceptable	The server can only generate a response that is not accepted by the client

      407 Proxy Authentication Required	The client must first authenticate itself with the proxy

      408 Request Timeout	The server timed out waiting for the request

      409 Conflict	The request could not be completed because of a conflict in the request

      410 Gone	The requested page is no longer available

      411 Length Required	The "Content-Length" is not defined. The server will not accept the request without it 

      412 Precondition Failed	The precondition given in the request evaluated to false by the server

      413 Request Too Large	The server will not accept the request, because the request entity is too large

      414 Request-URI Too Long	The server will not accept the request, because the URI is too long. Occurs when you convert a POST request to a GET request with a long query information 

      415 Unsupported Media Type	The server will not accept the request, because the media type is not supported 

      416 Range Not Satisfiable	The client has asked for a portion of the file, but the server cannot supply that portion

      417 Expectation Failed	The server cannot meet the requirements of the Expect request-header field

    5xx: Server Error
      Message:	Description:
      500 Internal Server Error	A generic error message, given when no more specific message is suitable

      501 Not Implemented	The server either does not recognize the request method, or it lacks the ability to fulfill the request

      502 Bad Gateway	The server was acting as a gateway or proxy and received an invalid response from the upstream server

      503 Service Unavailable	The server is currently unavailable (overloaded or down)

      504 Gateway Timeout	The server was acting as a gateway or proxy and did not receive a timely response from the upstream server

      505 HTTP Version Not Supported	The server does not support the HTTP protocol version used in the request

      511 Network Authentication Required	The client needs to authenticate to gain network access



  responseText	
      Returns the response data as a string


  responseXML	
      Returns the response data as XML data

  statusText	
      Returns the status-text (e.g. "OK" or "Not Found")

  */

  // function loadData() {
  //   const xhttp = new XMLHttpRequest();
  //   xhttp.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const data = JSON.parse(this.responseText);

  //       console.log(data);

  //       data.forEach(val => {
  //         const html = `
  //             <tr>
  //                 <td>${val.id}</td>
  //                 <td >${val.name
  //                   .split(' ')
  //                   .map(val => val.replace(val[0], val[0].toUpperCase()))
  //                   .join(' ')}</td>
  //                 <td>${val.email.toLowerCase()}</td>
  //                 <td>${val.postId}</td>
  //                 <td>${val.body}</td>
  //               </tr>
  //         `;
  //         document
  //           .querySelector('tbody')
  //           .insertAdjacentHTML('afterbegin', html);
  //       });
  //     }
  //   };

  //   xhttp.open('GET', './assets/js/users.json');

  //   xhttp.send();

  //   // console.log(xhttp);
  // }

  // loadData();

  //

  $('tbody').load('assets/js/users.json', function (resTxt, staTxt, xhr) {
    // console.log(resTxt, staTxt, xhr);

    $(this).text(' ');

    if (staTxt === 'success') {
      const data = JSON.parse(resTxt);

      data.forEach(val => {
        const html = `
                    <tr>
                        <td>${val.id}</td>
                        <td >${val.name
                          .split(' ')
                          .map(val => val.replace(val[0], val[0].toUpperCase()))
                          .join(' ')}</td>
                        <td>${val.email.toLowerCase()}</td>
                        <td>${val.postId}</td>
                        <td>${val.body}</td>
                      </tr>
                `;
        document.querySelector('tbody').insertAdjacentHTML('afterbegin', html);
      });
    } else alert('Error Loading...');
  });

  //
  $('#search').keyup(function () {
    let getInput = $(this).val().toLowerCase();
    console.log(getInput);

    // Filter for all Column

    $('tbody tr').filter(function () {
      $(this).toggle(
        $(this).children(':eq(2)').text().toLowerCase().indexOf(getInput) > -1
      );
    });
  });
});
