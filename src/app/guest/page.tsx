import {resolveHotel} from "@/core/tenant/registry";
import {resolveMockGuestSession} from "@/core/session/mock";
import {ServiceGrid} from "@/components/guest/ServiceGrid";
import {GuestMenu} from "@/components/guest/GuestMenu";

type GuestPageProps={
  searchParams:Promise<{token?:string}>;
};

export default async function GuestPage({searchParams}:GuestPageProps){
  const {token}=await searchParams;
  const session=token?resolveMockGuestSession(token):null;
  const hotel=session?.hotel??await resolveHotel();

  return (
    <main className="guest-shell">
      <div className="guest-container">
        <header className="guest-header">
          <div>
            <div className="eyebrow">GUEST CONCIERGE</div>
            <h1 className="guest-brand">{hotel.identity.displayName}</h1>
            <p className="muted">{hotel.identity.tagline}</p>
          </div>
          {session&&(
            <div className="guest-session-pill">
              <span>ROOM {session.roomNumber}</span>
              <strong>{session.guestName}</strong>
            </div>
          )}
        </header>

        {!session&&(
          <section className="card guest-notice">
            <strong>No active guest session</strong>
            <p className="muted">Open the room QR code to enter the guest experience with the correct room and stay context.</p>
            <a className="btn btn-primary" href="/g/anemos-room-111">Open demo QR</a>
          </section>
        )}

        {session&&(
          <>
            <section className="guest-welcome">
              <div className="eyebrow">ROOM {session.roomNumber}</div>
              <h2>Good evening, {session.guestName} 👋</h2>
              <p className="muted">How can we make your stay more comfortable?</p>
              <a className="btn btn-primary concierge-btn" href="/guest/concierge">Ask Concierge</a>
            </section>

            <GuestMenu hotel={hotel}/>

            <section className="card guest-services">
              <div className="section-heading">
                <div>
                  <div className="eyebrow">SERVICES</div>
                  <h3>Hotel services</h3>
                </div>
                <span className="status-dot">Session active</span>
              </div>
              <ServiceGrid hotel={hotel}/>
            </section>

            <section className="guest-quick-actions">
              <a className="quick-action" href="/guest/housekeeping">
                <strong>Housekeeping</strong>
                <span>Request cleaning or room assistance</span>
              </a>
              <a className="quick-action" href="/guest/restaurant">
                <strong>Food &amp; Beverage</strong>
                <span>Explore dining and room service</span>
              </a>
              <a className="quick-action" href="/guest/local-guide">
                <strong>Goa Guide</strong>
                <span>Places, directions and local recommendations</span>
              </a>
            </section>
          </>
        )}
      </div>

      {session&&(
        <nav className="guest-bottom-nav" aria-label="Guest navigation">
          <a className="active" href={`/guest?token=${encodeURIComponent(session.qrToken)}`}><span>⌂</span>Home</a>
          <a href="/guest/concierge"><span>✦</span>Concierge</a>
          <a href="#services"><span>▦</span>Services</a>
          <a href="/guest/contact"><span>•••</span>More</a>
        </nav>
      )}
    </main>
  );
}
