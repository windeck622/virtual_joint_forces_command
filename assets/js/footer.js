var year = new Date().getFullYear();

let appFooter = `
    <!--footer -->
    <footer style="padding: 20px; text-align: center;">
          <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <!-- Logo Section -->
            <div style="flex: 3;">
              <img src="assets/imgs/vjfcom_logo.png" alt="Website Logo" style="max-height: 50px;">
            </div>

            <!-- Links Section -->
            <div style="flex: 1; text-align: center;">
              <a href="index.html#About-Us-Section" style="margin: 0 10px;">About Us</a>
              <a href="orbat.html#" style="margin: 0 10px;">ORBAT</a>
              <a href="train.html#" style="margin: 0 10px;">Training</a>
              <a href="rules.html#" style="margin: 0 10px;">Rules</a>
            </div>

            <!-- Copyright Section -->
              <div style="flex: 2; text-align: right;">
                  <p>&copy; ${year} Virtual Joint Forces Command Inc.</p>
                  <p>Non-Profit | EIN: 33-2786845</p>
                  <p>PO Box 208, Sayville,NY 11782</p>
              </div>
              <div style="flex: 1; text-align: right;">
                  <img src="assets/imgs/digital_seal.png" alt="Digital Seal" style="max-height: 30px; margin-top: 10px;">
              </div>

          </div>
        </footer>
    <!-- end of footer -->
`;
document.getElementById("app-footer").innerHTML = appFooter;